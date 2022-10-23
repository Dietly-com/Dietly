import express, { Request, Response, NextFunction, Router } from 'express';

export const createOne = async (req: Request, res: Response, object:any) => {
    try {
        const recordBody=req.body;
        recordBody.tokenData=undefined;
        const record = await object.create({data: recordBody});
        res.status(201).send({data: record, success: true, message: "Utworzono rekord"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}

export const updateOne = async (req: Request, res: Response, object:any) => {
    try {
        const { id } = req.params;
        const recordBody=req.body;
        recordBody.tokenData=undefined;
        const record = await object.update({
            where: {
                id: Number(id),
            },
            data: recordBody
          })
        res.status(201).send({data: record, success: true, message: "Znaleziono rekord"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
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
        res.status(201).send({data: record, success: true, message: "Znaleziono rekord"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
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
        res.status(201).send({data: records, success: true, message: "Znaleziono rekordy"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
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
        res.status(201).send({data: record, success: true, message: "Usunięto rekord"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}