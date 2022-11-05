import { ALL } from 'dns';
import express, { Request, Response, NextFunction, Router } from 'express';
const bcrypt = require("bcrypt");
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

export const createOne = async (req: Request, res: Response, object:  any) => {
    try {
        req.body.data.createdById = req.body.authorization.id;
        let query = {  data: req.body.data  };
        const record = await object.create(query);
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

export const updateOne = async (req: Request, res: Response, object:  any) => {
    try {
        req.body.data.modifiedById = req.body.authorization.id;
        req.body.data.modifiedAt = new Date();
        console.log(req.body.data);
        const { id } = req.params;
        if(req.body.data.password !== undefined) {
            const salt:string = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.data.password, salt);
            req.body.data.password = hashPassword;
        };
        let query = {
            where: {
                id: Number(id),
            },
            data: req.body.data
        };
        const record = await object.update(query)
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

export const findOne = async (req: Request, res: Response, object:  any) => {
    try {
        const { id } = req.params;
        await object.update({
            where: {
                id: Number(id),
            },
            data: {
                views: {  increment: 1  }
            }
        })

        let record = null;
        var query = {};
        if  (req.body.include != undefined) {
            query = {
                where: {
                    id: Number(id),
                },
                include: req.body.include,
            }
        } else {
            query = {
                where: {
                    id: Number(id),
                },
            }
        }
        record = await object.findUnique(query);
        if (record == null)  {
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

export const findMany = async (req: Request, res: Response, object:  any) => {
    try {
        let records = null;
        let query = {
            include: { createdBy: false },
            where: {
                NOT: [
                    {
                        id: -10
                    }
                ]
            },
            skip: 0,
            take: ALL,
            orderBy: [{
                id: 'desc',
            }],
        };
        if (req.body.include != undefined) {
            query.include = req.body.include;
        }
        if (req.body.where != undefined) {
            query.where = req.body.where;
        }
        if (req.body.skip != undefined) {
            query.skip = req.body.skip;
        }
        if (req.body.take != undefined) {
            query.take = req.body.take;
        }
        if (req.body.orderBy != undefined) {
            query.orderBy = req.body.orderBy;
        }
        console.log(query);
        records = await object.findMany(query);
        res = new ResponseBuilder(res)
                .withStatus(STATUS_OK)
                .withResponseBodyData(records)
                .withResponseBodySuccess(true)
                .withResponseBodyMessage(MESSAGE_FIND_RECORDS)
                .send();
    } catch (error) {
        console.log(error);
        res = new ResponseBuilder(res)
                .withStatus(STATUS_INTERNAL_SERVER_ERROR)
                .withResponseBodySuccess(false)
                .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
                .send();
    }
}

export const deleteOne = async (req: Request, res: Response, object:  any) => {
    try {
        const { id } = req.params
        var query = {
            where: {
                id: Number(id),
            },
        };
        const record = await object.delete(query)
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

export const search = async (req: Request, res: Response, object:any) => {
    try {
        const term=req.params.term;

        let records = null;
        var query = {};
        if(req.body.include != undefined) {
            query = {
                where: {
                    name:{
                        contains:term,
                    }
                },
                include: req.body.include
            }
        }
        records = await object.findMany(query);
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
