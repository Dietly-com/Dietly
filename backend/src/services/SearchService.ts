//DIETLY-17
import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import {
    ResponseBuilder,
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
    STATUS_NOT_FOUND,
    STATUS_OK,
    MESSAGE_CREATED_RECORD,
    MESSAGE_UPDATED_RECORD,
    MESSAGE_FIND_RECORD,
    MESSAGE_FIND_RECORDS,
    MESSAGE_DELETED_RECORD,
    MESSAGE_INTERNAL_SERVER_ERROR,
    MESSAGE_NOT_FOUND_RECORD
} from '../utils/ResponseUtils';

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

        res = new ResponseBuilder(res)
        .withStatus(STATUS_OK)
        .withResponseBodyData(records)
        .withResponseBodySuccess(true)
        .withResponseBodyMessage(MESSAGE_FIND_RECORD)
        .send();
    } catch (error) {
        res = new ResponseBuilder(res)
        .withStatus(STATUS_INTERNAL_SERVER_ERROR)
        .withResponseBodySuccess(false)
        .withResponseBodyMessage(MESSAGE_INTERNAL_SERVER_ERROR)
        .send();
    }
}