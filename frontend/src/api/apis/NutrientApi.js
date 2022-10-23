import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'nutrient';

export const postNutrient = async (data) => {
    return postOne(path, data);
};

export const getNutrient = async (id) => {
    return getOne(path, id);
};

export const getNutrients = async () => {
    return getMany(path);
};

export const patchNutrient = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteNutrient = async (id) => {
    return deleteOne(path, id);
};