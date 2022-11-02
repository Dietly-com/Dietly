import express, { Router } from 'express';
import {findMany} from '../services/PopularService';
import { PrismaClient} from '@prisma/client';
import { verifyUser } from '../middlewares/AuthorizationMiddleware';
import { RequestBuilder } from '../utils/RequestUtils';


const object = new PrismaClient().recipe;
const include = {
    owner: true,
    file: true,
};

const router: Router = express.Router();
router.use(verifyUser);
router.use(async (req, res, next) => {
    req = new RequestBuilder(req)
    .withInclude(include)
    .get();
    next();
})

router.get("/:amount/:from",  async (req, res) => {
    findMany(req, res, object);
})

module.exports = router