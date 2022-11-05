import express, { Router } from 'express';
import {createOne, findOne, findMany, updateOne, deleteOne, search } from '../services/StandardService';
import { PrismaClient} from '@prisma/client';
import { verifyUser } from '../middlewares/AuthorizationMiddleware';
import { RequestBuilder } from '../utils/RequestUtils';

const object = new PrismaClient().recipe;
const include = {
    owner: true,
    file: true,
    unit: true,
    recipeProduct: {include: {product: {include: {file: true}}}}
};

const router: Router = express.Router();
router.use(verifyUser);
router.use(async (req, res, next) => {
    req = new RequestBuilder(req)
    .withInclude(include)
    .get();
    next();
})
router.post("/", async (req, res) => {
    createOne(req, res, object);
})

router.get("/:id",  async (req, res) => {
    findOne(req, res, object);
})

router.get("/",  async (req, res) => {
    findMany(req, res, object);
})

router.patch("/:id",  async (req, res) => {
    updateOne(req, res, object);
})

router.delete("/:id",  async (req, res) => {
    deleteOne(req, res, object);
})

router.get("/search/:term",  async (req, res) => {
    search(req, res, object);
})
module.exports = router