import express, { Router } from 'express';
import {createOne, findOne, findMany, updateOne, deleteOne } from '../services/StandardService';
import { PrismaClient} from '@prisma/client';
import { verifyUser } from '../middlewares/UserMiddleware';

const object = new PrismaClient().userMeal;
const include = {
    userMealProducts: {include: {product: {include: {file: true}}, unit:true}},
    userMealRecipes: {include: {recipe: {include: {file: true}}, unit:true}},
    user:true
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