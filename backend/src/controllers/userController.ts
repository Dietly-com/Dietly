import express, { Router } from 'express';
import { createUser } from '../services/UserService';
import {createOne, findOne, findMany, updateOne, deleteOne } from '../services/StandardService';
import { findMe, updateMe, deleteMe } from '../services/MeService';
import { PrismaClient} from '@prisma/client';
import { verifyUser } from '../middlewares/AuthMiddleware';

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

router.get("/:id", verifyUser, async (req, res) => {
    findOne(req, res, object, include);
})

router.get("/", verifyUser, async (req, res) => {
    findMany(req, res, object, include);
})

router.patch("/:id", verifyUser, async (req, res) => {
    updateOne(req, res, object);
})

router.delete("/:id", verifyUser, async (req, res) => {
    deleteOne(req, res, object);
})

router.get("/me", verifyUser, async (req, res) => {
    findMe(req, res, object, include);
})

router.patch("/me", verifyUser, async (req, res) => {
    updateMe(req, res, object);
})

router.delete("/me", verifyUser, async (req, res) => {
    deleteMe(req, res, object);
})

module.exports = router