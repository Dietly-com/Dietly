import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'diet';

export const postDiet = async (data) => {
    return postOne(path, data);
};

export const getDiet = async (id) => {
    return getOne(path, id);
};

export const getDiets = async () => {
    return getMany(path);
};

export const patchDiet = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteDiet = async (id) => {
    return deleteOne(path, id);
};