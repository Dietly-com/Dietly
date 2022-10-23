import { Request, Response, NextFunction } from 'express';

import { verifyAccessToken } from '../utils/UserUtils';

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer')) {
    const token = auth.slice(7);

    try {
      const tokenData = verifyAccessToken(token);
      req.body.tokenData = tokenData;
      next();
    } catch (error) {
      res.status(500).send({ success: false, message: "Zły token"});
    }
  } else {
    res.status(500).send({ success: false, message: "Zły token"});
  }
}