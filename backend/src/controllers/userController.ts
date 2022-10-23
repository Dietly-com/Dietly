import express, { Router } from 'express';
import {createUser, authUser } from '../services/UserService';
import {createOne, findOne, findMany, updateOne, deleteOne } from '../services/StandardService';
import { PrismaClient} from '@prisma/client';

const object = new PrismaClient().user;
const include = {
    userBadges: {include:{badge: {include:{file:true}}}},
    userPersonalBests: {include:{personalBest: {include:{file:true}}}},
    file:true
};

const router: Router = express.Router();
router.post("/", async (req, res) => {
    createUser(req, res);
})

router.post("/auth", async (req, res) => {
    authUser(req, res);
})

router.get("/:id",  async (req, res) => {
    findOne(req, res, object, include);
})

router.get("/",  async (req, res) => {
    findMany(req, res, object, include);
})

router.patch("/:id",  async (req, res) => {
    updateOne(req, res, object);
})

router.delete("/:id", async (req, res) => {
    deleteOne(req, res, object);
})

module.exports = router