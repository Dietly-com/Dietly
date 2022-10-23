import jwt,{Secret} from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateAccessToken = (id: Number) => {
    const tokenSecret: Secret = process.env.TOKEN_SECRET as Secret;
    console.log(id);
    console.log(tokenSecret);
    console.log(jwt.sign(id, tokenSecret, { expiresIn: '7d' }));
    return jwt.sign(id, tokenSecret, { expiresIn: '7d' });
}

export const verifyAccessToken = (token: string) => {
    const tokenSecret: string = process.env.TOKEN_SECRET as string;
    return jwt.verify(token, tokenSecret);
}
