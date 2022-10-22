import express, { Request, Response, NextFunction, Router } from 'express';

export const createOne = async (req: Request, res: Response, object:any) => {
    try {
        const record = await object.create({data: req.body});
        res.status(201).send({data: record, success: true, message: "Utworzono reokrd"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}

export const updateOne = async (req: Request, res: Response, object:any) => {
    try {
        const { id } = req.params;
        const record = await object.update({
            where: {
                id: Number(id),
            },
            data: req.body
          })
        res.status(201).send({data: record, success: true, message: "Znaleziono rekord"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}

export const findOne = async (req: Request, res: Response, object:any) => {
    try {
        const { id } = req.params
        const record = await object.findOne({
            where: {
                id: Number(id),
            },
        })
        res.status(201).send({data: record, success: true, message: "Znaleziono rekord"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}

export const findMany = async (req: Request, res: Response, object:any) => {
    try {
        const records = await object.findMany();
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