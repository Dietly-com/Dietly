import { Request, Response, NextFunction } from 'express';
import { generateAccessToken } from '../utils/TokenUtils';
import { PrismaClient } from '@prisma/client';
import {
    ResponseBuilder,
    STATUS_BAD_REQUEST,
    STATUS_INTERNAL_SERVER_ERROR,
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    MESSAGE_LOGGED_USER,
    MESSAGE_INTERNAL_SERVER_ERROR,
    MESSAGE_WRONG_LOGIN_DATA
  } from '../utils/ResponseUtils';

const prisma = new PrismaClient();
const Joi = require("joi");
const bcrypt = require("bcrypt");

export const authUser = async (req:Request, res:Response) => {
    try {
        const schema = Joi.object({
            login: Joi.string().required().label("Login"),
            password: Joi.string().required().label("Password"),
        })
        const { error } = schema.validate(req.body.data);
        if (error){
            console.log(error);
            return res = new ResponseBuilder(res)
            .withStatus(STATUS_BAD_REQUEST)
            .withResponseBodySuccess(false)
            .withResponseBodyMessage({
                text: error.details[0].message,
                type: 'error',
                code: 'E0'
            })
            .send();
        }
        
        const user = await prisma.user.findUnique({
            where: {
              login: req.body.data.login,
            },
          });
        if (!user){
            return res = new ResponseBuilder(res)
            .withStatus(STATUS_UNAUTHORIZED)
            .withResponseBodySuccess(false)
            .withResponseBodyMessage(MESSAGE_WRONG_LOGIN_DATA)
            .send();
        }
            
        const validPassword = await bcrypt.compare(
            req.body.data.password,
            user.password
        )
        if (!validPassword){
            res = new ResponseBuilder(res)
            .withStatus(STATUS_UNAUTHORIZED)
            .withResponseBodySuccess(false)
            .withResponseBodyMessage(MESSAGE_WRONG_LOGIN_DATA)
            .send();
        }
            
        const token = generateAccessToken(user.id);
        res = new ResponseBuilder(res)
        .withStatus(STATUS_OK)
        .withResponseBodyData({token: token, user: user})
        .withResponseBodySuccess(true)
        .withResponseBodyMessage(MESSAGE_LOGGED_USER)
        .send();
    } catch (error) {
        res = new ResponseBuilder(res)
        .withStatus(STATUS_INTERNAL_SERVER_ERROR)
        .withResponseBodySuccess(false)
        .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
        .send();
    }
}