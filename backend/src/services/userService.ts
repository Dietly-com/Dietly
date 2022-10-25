import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import {
  ResponseBuilder,
  STATUS_CREATED,
  STATUS_CONFLICT,
  STATUS_INTERNAL_SERVER_ERROR,
  MESSAGE_CREATED_RECORD,
  MESSAGE_INTERNAL_SERVER_ERROR,
  MESSAGE_WRONG_LOGIN
} from '../utils/ResponseUtils';

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              login: req.body.data.login,
            },
          });
        if (user) {
            res = new ResponseBuilder(res)
            .withStatus(STATUS_CONFLICT)
            .withResponseBodySuccess(false)
            .withResponseBodyMessage(MESSAGE_WRONG_LOGIN)
            .send();
        }
        const salt:string = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.data.password, salt);
        const record = await prisma.user.create({
            data: { ...req.body.data, password: hashPassword },
          });
        res = new ResponseBuilder(res)
        .withStatus(STATUS_CREATED)
        .withResponseBodyData(record)
        .withResponseBodySuccess(true)
        .withResponseBodyMessage(MESSAGE_CREATED_RECORD)
        .send();
    } catch (error) {
        res = new ResponseBuilder(res)
        .withStatus(STATUS_INTERNAL_SERVER_ERROR)
        .withResponseBodySuccess(false)
        .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
        .send();
    }
}