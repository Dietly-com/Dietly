import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const Joi = require("joi");
import { generateAccessToken } from '../utils/UserUtils';

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              login: req.body.data.login,
            },
          });
        if (user) {
            res.status(409)
                .send({ success: false, message: "Użytkownik o takim loginie istnieje!"});
        }
        const salt:string = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.data.password, salt);
        await prisma.user.create({
            data: { ...req.body.data, password: hashPassword },
          });
        res.status(201).send({ success: true, message: "Utworzono użytkownika"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}

export const authUser = async (req:Request, res:Response) => {
    try {
        const schema = Joi.object({
            login: Joi.string().required().label("Login"),
            password: Joi.string().required().label("Password"),
        })
        const { error } = schema.validate(req.body.data);
        if (error){
            console.log(error);
           return res.status(400).send({ success: false, message: error.details[0].message}) 
        }
        
        const user = await prisma.user.findUnique({
            where: {
              login: req.body.data.login,
            },
          });
        if (!user){
           return res.status(401).send({ success: false, message: "Błędny login lub hasło!"}) 
        }
            
        const validPassword = await bcrypt.compare(
            req.body.data.password,
            user.password
        )
        if (!validPassword){
            return res.status(401).send({ success: false, message: "Błędny login lub hasło!"})
        }
            
        const token = generateAccessToken(user.id);
        res.status(200).send({ success: true, message: "Zalogowano!", data: {
            token: token,
            user: user
        }})
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"})
    }
}