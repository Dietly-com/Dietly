import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'product';

export const postProduct = async (data) => {
    return postOne(path, data);
};

export const getProduct = async (id) => {
    return getOne(path, id);
};

export const getProducts = async () => {
    return getMany(path);
};

export const patchProduct = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteProduct = async (id) => {
    return deleteOne(path, id);
};