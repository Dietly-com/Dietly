import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'recipeProduct';

export const postRecipeProduct = async (data) => {
    return postOne(path, data);
};

export const getRecipeProduct = async (id) => {
    return getOne(path, id);
};

export const getRecipeProducts = async () => {
    return getMany(path);
};

export const patchRecipeProduct = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteRecipeProduct = async (id) => {
    return deleteOne(path, id);
};