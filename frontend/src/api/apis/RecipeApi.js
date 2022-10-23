import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'recipe';

export const postRecipe = async (data) => {
    return postOne(path, data);
};

export const getRecipe = async (id) => {
    return getOne(path, id);
};

export const getRecipes = async () => {
    return getMany(path);
};

export const patchRecipe = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteRecipe = async (id) => {
    return deleteOne(path, id);
};