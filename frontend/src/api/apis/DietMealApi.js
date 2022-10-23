import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'dietMeal';

export const postDietMeal = async (data) => {
    return postOne(path, data);
};

export const getDietMeal = async (id) => {
    return getOne(path, id);
};

export const getDietMeals = async () => {
    return getMany(path);
};

export const patchDietMeal = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteDietMeal = async (id) => {
    return deleteOne(path, id);
};