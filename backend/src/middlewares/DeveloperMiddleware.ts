import { Request, Response, NextFunction } from 'express';

export const showStatus = async (req: Request, res: Response, next: NextFunction) => {
    next();
}