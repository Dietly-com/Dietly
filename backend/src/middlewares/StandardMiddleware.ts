import express, { Request, Response, NextFunction, Router } from 'express';

const addResponse = (data: any, success: Boolean, message: String) => {
    return {
        data: data,
        success: success,
        message: message
    };
}

export const findMany = function (object:any) {
    return async function (req:Request, res:Response, next:NextFunction) {
        res.json(addResponse(await object.findMany(), true, 'Success'))
        next()
    }
}

export const createOne = function (object:any) {
    return async function (req:Request, res:Response, next:NextFunction) {
        const record = await object.create({data: req.body})
        res.json(addResponse(record, true, 'Success'))
        next()
    }
}

export const deleteOne = function (object:any) {
    return async function (req:Request, res:Response, next:NextFunction) {
        const { id } = req.params
        const record = await object.delete({
            where: {
                id: Number(id),
            },
        })
        res.json(addResponse(record, true, 'Success'))
        next()
    }
}