import express, { Router } from 'express';
import {createOne, findOne, findMany, updateOne, deleteOne } from '../services/StandardService';
import { PrismaClient} from '@prisma/client';
import { verifyUser } from '../middlewares/UserMiddleware';

const object = new PrismaClient().diet;
const include = {
    owner: true,
    file: true,
    dietMeals: {include: {
        dietMealRecipes: {include: {
            recipe: {include: {file: true}},
            unit: true
    }}, dietMealProducts: {include: {
        product: {include: {file: true}},
        unit: true
}}}}
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

router.patch("/",  async (req, res) => {
    updateOne(req, res, object);
})

router.delete("/:id",  async (req, res) => {
    deleteOne(req, res, object);
})

module.exports = router