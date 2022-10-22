import express, { Router } from 'express';
import {verifyUser } from '../middlewares/UserMiddleware';
import {createOne, findOne, findMany, updateOne, deleteOne } from '../controllers/StandardController';
import { PrismaClient} from '@prisma/client';

const object = new PrismaClient().userBadge;
const router: Router = express.Router();

router.use(verifyUser);

router.post("/", async (req, res) => {
    createOne(req, res, object);
})

router.get("/:id",  async (req, res) => {
    findOne(req, res, object);
})

router.get("/",  async (req, res) => {
    findMany(req, res, object);
})

router.patch("/",  async (req, res) => {
    updateOne(req, res, object);
})

router.delete("/:id",  async (req, res) => {
    deleteOne(req, res, object);
})

module.exports = router