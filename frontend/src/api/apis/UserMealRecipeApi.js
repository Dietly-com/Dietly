import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'userMealRecipe';

export const postUserMealRecipe = async (data) => {
    return postOne(path, data);
};

export const getUserMealRecipe = async (id) => {
    return getOne(path, id);
};

export const getUserMealRecipes = async () => {
    return getMany(path);
};

export const patchUserMealRecipe = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUserMealRecipe = async (id) => {
    return deleteOne(path, id);
};