import express, { Request, Response } from 'express';
import {
    ResponseBuilder,
    STATUS_INTERNAL_SERVER_ERROR,
    STATUS_OK,
    MESSAGE_FIND_RECORDS,
    MESSAGE_INTERNAL_SERVER_ERROR,
} from '../utils/ResponseUtils';

export const findMany = async (req: Request, res: Response, object: any) => {
    try {
        const { amount, from } = req.params;
        let records = null;
        let query = {
            take: parseInt(amount),
            skip: parseInt(from),
            orderBy: [{
                views: 'desc',
            },
            {
                name: 'desc',
            }],
            include:req.body.include,
        };
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
