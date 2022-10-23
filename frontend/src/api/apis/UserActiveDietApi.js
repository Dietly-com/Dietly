import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'userActiveDiet';

export const postUserActiveDiet = async (data) => {
    return postOne(path, data);
};

export const getUserActiveDiet = async (id) => {
    return getOne(path, id);
};

export const getUserActiveDiets = async () => {
    return getMany(path);
};

export const patchUserActiveDiet = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUserActiveDiet = async (id) => {
    return deleteOne(path, id);
};