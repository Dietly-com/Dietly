import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'userMeal';

export const postUserMeal = async (data) => {
    return postOne(path, data);
};

export const getUserMeal = async (id) => {
    return getOne(path, id);
};

export const getUserMeals = async () => {
    return getMany(path);
};

export const patchUserMeal = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUserMeal = async (id) => {
    return deleteOne(path, id);
};