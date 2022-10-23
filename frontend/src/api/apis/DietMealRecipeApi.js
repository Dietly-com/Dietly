import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'dietMealRecipe';

export const postDietMealRecipe = async (data) => {
    return postOne(path, data);
};

export const getDietMealRecipe = async (id) => {
    return getOne(path, id);
};

export const getDietMealRecipes = async () => {
    return getMany(path);
};

export const patchDietMealRecipe = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteDietMealRecipe = async (id) => {
    return deleteOne(path, id);
};