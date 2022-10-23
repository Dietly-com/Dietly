import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'dietMealProduct';

export const postDietMealProduct = async (data) => {
    return postOne(path, data);
};

export const getDietMealProduct = async (id) => {
    return getOne(path, id);
};

export const getDietMealProducts = async () => {
    return getMany(path);
};

export const patchDietMealProduct = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteDietMealProduct = async (id) => {
    return deleteOne(path, id);
};