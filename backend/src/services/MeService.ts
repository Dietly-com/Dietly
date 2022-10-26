import express, { Request, Response, NextFunction, Router } from 'express';
import {
    ResponseBuilder,
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
    STATUS_NOT_FOUND,
    STATUS_OK,
    MESSAGE_CREATED_RECORD,
    MESSAGE_UPDATED_RECORD,
    MESSAGE_FIND_RECORD,
    MESSAGE_FIND_RECORDS,
    MESSAGE_DELETED_RECORD,
    MESSAGE_INTERNAL_SERVER_ERROR,
    MESSAGE_NOT_FOUND_RECORD
} from '../utils/ResponseUtils';

export const updateMe = async (req: Request, res: Response, object:any) => {
    try {
        req.body.data.modifiedById = req.body.authorization.id;
        req.body.data.modifiedAt = new Date();
        const id = req.body.authorization.id;
        const record = await object.update({
            where: {
                id: Number(id),
            },
            data: req.body.data
          })
          res = new ResponseBuilder(res)
          .withStatus(STATUS_OK)
          .withResponseBodyData(record)
          .withResponseBodySuccess(true)
          .withResponseBodyMessage(MESSAGE_UPDATED_RECORD)
          .send();
    } catch (error) {
        res = new ResponseBuilder(res)
        .withStatus(STATUS_INTERNAL_SERVER_ERROR)
        .withResponseBodySuccess(false)
        .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
        .send();
    }
}

export const findMe = async (req: Request, res: Response, object:any) => {
    try {
        const id = req.body.authorization.id;
        await object.update({
            where: {
                id: Number(id),
            },
            data: {
                views: {increment: 1}
            }
          })
        let record = null;
        if(req.body.include != undefined) {
            record = await object.findUnique({
                where: {
                    id: Number(id),
                },
                include: req.body.include,
            })
        } else {
            record = await object.findUnique({
                where: {
                    id: Number(id),
                },
            })
        }
        if (record == null){
            return res = new ResponseBuilder(res)
            .withStatus(STATUS_NOT_FOUND)
            .withResponseBodySuccess(false)
            .withResponseBodyMessage(MESSAGE_NOT_FOUND_RECORD)
            .send();
        }
        res = new ResponseBuilder(res)
        .withStatus(STATUS_OK)
        .withResponseBodyData(record)
        .withResponseBodySuccess(true)
        .withResponseBodyMessage(MESSAGE_FIND_RECORD)
        .send();
    } catch (error) {
        res = new ResponseBuilder(res)
        .withStatus(STATUS_INTERNAL_SERVER_ERROR)
        .withResponseBodySuccess(false)
        .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
        .send();
    }
}

export const deleteMe = async (req: Request, res: Response, object:any) => {
    try {
        const id = req.body.authorization.id;
        const record = await object.delete({
            where: {
                id: Number(id),
            },
        })
        res = new ResponseBuilder(res)
        .withStatus(STATUS_OK)
        .withResponseBodyData(record)
        .withResponseBodySuccess(true)
        .withResponseBodyMessage(MESSAGE_DELETED_RECORD)
        .send();
    } catch (error) {
        res = new ResponseBuilder(res)
        .withStatus(STATUS_INTERNAL_SERVER_ERROR)
        .withResponseBodySuccess(false)
        .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
        .send();
    }
}