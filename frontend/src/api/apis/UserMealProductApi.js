import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'userMealProduct';

export const postUserMealProduct = async (data) => {
    return postOne(path, data);
};

export const getUserMealProduct = async (id) => {
    return getOne(path, id);
};

export const getUserMealProducts = async () => {
    return getMany(path);
};

export const patchUserMealProduct = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUserMealProduct = async (id) => {
    return deleteOne(path, id);
};