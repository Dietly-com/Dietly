import jwt from 'jsonwebtoken';

export const generateAccessToken = (id: Number) => {
    const tokenSecret: string = process.env.TOKEN_SECRET as string;
    return jwt.sign(id, tokenSecret, { expiresIn: '7d' });
}

export const verifyAccessToken = (token: string) => {
    const tokenSecret: string = process.env.TOKEN_SECRET as string;
    return jwt.verify(token, tokenSecret);
}
