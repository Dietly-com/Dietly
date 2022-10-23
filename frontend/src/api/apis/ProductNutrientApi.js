import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'productNutrient';

export const postProductNutrient = async (data) => {
    return postOne(path, data);
};

export const getProductNutrient = async (id) => {
    return getOne(path, id);
};

export const getProductNutrients = async () => {
    return getMany(path);
};

export const patchProductNutrient = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteProductNutrient = async (id) => {
    return deleteOne(path, id);
};