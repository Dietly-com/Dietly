import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';

export const search = async (req: Request, res: Response) => {
    try {
        const { term } = req.params;

        let records = {
            products: {},
            recipes: {},
            diets: {}
        };

        const productObject = new PrismaClient().product;
        const productInclude = {
            owner: true,
            file: true,
            unit:true,
            productNutrients: {include: {nutrient: true}}
        };

        const recipeObject = new PrismaClient().recipe;
        const recipeInclude = {
            owner: true,
            file: true,
            unit: true,
            recipeProduct: {include: {product: {include: {file: true}}}}
        };

        const dietObject = new PrismaClient().diet;
        const dietInclude = {
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

        records.products = await productObject.findMany({
            where: {
                name: term,
            },
            include: productInclude
        });
        records.recipes = await recipeObject.findMany({
            where: {
                name: term,
            },
            include: recipeInclude
        });
        records.diets = await dietObject.findMany({
            where: {
                name: term,
            },
            include: dietInclude
        });

        res.status(201).send({data: records, success: true, message: "Znaleziono rekordy"});
    } catch (error) {
        res.status(500).send({ success: false, message: "Wewnętrzny błąd serwera"});
    }
}