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

export const createOne = async (req: Request, res: Response, object:any) => {
    try {
        const record = await object.create({data: req.body.data});
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

export const updateOne = async (req: Request, res: Response, object:any) => {
    try {
        const { id } = req.params;
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

export const findOne = async (req: Request, res: Response, object:any, include:any = undefined) => {
    try {
        const { id } = req.params;
        let record = null;
        if(include != undefined) {
            record = await object.findUnique({
                where: {
                    id: Number(id),
                },
                include: include,
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

export const findMany = async (req: Request, res: Response, object:any, include:any = undefined) => {
    try {
        let records = null;
        if(include != undefined) {
            records = await object.findMany({
                include: include
            });
        } else {
            records = await object.findMany();
        }
        res = new ResponseBuilder(res)
        .withStatus(STATUS_OK)
        .withResponseBodyData(records)
        .withResponseBodySuccess(true)
        .withResponseBodyMessage(MESSAGE_FIND_RECORDS)
        .send();
    } catch (error) {
        res = new ResponseBuilder(res)
        .withStatus(STATUS_INTERNAL_SERVER_ERROR)
        .withResponseBodySuccess(false)
        .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
        .send();
    }
}

export const deleteOne = async (req: Request, res: Response, object:any) => {
    try {
        const { id } = req.params
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