import express, { Router } from 'express';
import {createUser, findUser, findUsers, authUser } from '../controllers/UserController';
import {createOne, findOne, findMany, updateOne, deleteOne } from '../controllers/StandardController';
import { PrismaClient} from '@prisma/client';

const object = new PrismaClient().user;

const router: Router = express.Router();
router.post("/", async (req, res) => {
    createUser(req, res);
})

router.get("/:id",  async (req, res) => {
    findOne(req, res, object, {userBadges:true, userPersonalBests: true});
})

router.get("/",  async (req, res) => {
    findMany(req, res, object, {userBadges:true, userPersonalBests: true});
})

router.post("/auth", async (req, res) => {
    authUser(req, res);
})

module.exports = router