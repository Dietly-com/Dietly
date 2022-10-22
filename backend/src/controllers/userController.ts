import { Request, Response, NextFunction } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const Joi = require("joi");
const userUtils = require("../utils/UserUtils");


export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              email: req.body.email,
            },
          });
        if (user) {
            res.status(409)
                .send({ success: false, message: "Użytkownik o takim emailu istnieje!"});
        }
        const salt:string = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        await prisma.user.create({
            data: { ...req.body, password: hashPassword },
          });
        res.status(201).send({ success: true, message: "Utworzono użytkownika"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}

export const selectUser = async (req:Request, res:Response) => {
    try {
        const user = await prisma.user.findUnique({
          where: {
            id: Number(req.params.userid),
          },
        });
        if (!user)
            return res
                .status(409)
                .send({ success: false, message: "Użytkownik o takim id nie istnieje" })
        res.send({ success: true, message: "Wyszukano użytkownika", user: user })
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"})
    }
}

export const selectUsers = async (req:Request, res:Response) => {
    try {
        const users = await prisma.user.findMany();
        res.send({ success: true, message: "Wyszukano użytkowników", users: users })
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"})
    }
}

export const authUser = async (req:Request, res:Response) => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required().label("Email"),
            password: Joi.string().required().label("Password"),
        })
        const { error } = schema.validate(req.body);
        if (error)
            return res.status(400).send({ success: false, message: error.details[0].message})
        const user = await prisma.user.findUnique({
            where: {
              email: req.body.email,
            },
          });
        if (!user)
            return res.status(401).send({ success: false, message: "Błędny email lub hasło!"})
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (!validPassword)
            return res.status(401).send({ success: false, message: "Błędny email lub hasło!"})
        const token = userUtils.generateAccessToken(user.id);
        res.status(200).send({ success: true, message: "Zalogowano!", data: token, user: {_id: user.id}})
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"})
    }
}