import express, { Router } from 'express';
import {createOne, findOne, findMany, updateOne, deleteOne } from '../services/StandardService';
import { PrismaClient} from '@prisma/client';
import { verifyUser } from '../middlewares/UserMiddleware';

const object = new PrismaClient().dietMealRecipe;
const include = {
    dietMeal: true,
    recipe: {include: {file: true}},
    unit: true
};

const router: Router = express.Router();
router.use(verifyUser);
router.post("/", async (req, res) => {
    createOne(req, res, object);
})

router.get("/:id",  async (req, res) => {
    findOne(req, res, object, include);
})

router.get("/",  async (req, res) => {
    findMany(req, res, object, include);
})

router.put("/:id",  async (req, res) => {
    updateOne(req, res, object);
})

router.delete("/:id",  async (req, res) => {
    deleteOne(req, res, object);
})

module.exports = router