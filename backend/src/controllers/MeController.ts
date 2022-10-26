import express, { Router } from 'express';
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
router.use(verifyUser);
router.get("/", async (req, res) => {
    findMe(req, res, object, include);
})

router.patch("/", async (req, res) => {
    updateMe(req, res, object);
})

router.delete("/", async (req, res) => {
    deleteMe(req, res, object);
})

module.exports = router