import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'userPersonalBest';

export const postUserPersonalBest = async (data) => {
    return postOne(path, data);
};

export const getUserPersonalBest = async (id) => {
    return getOne(path, id);
};

export const getUserPersonalBests = async () => {
    return getMany(path);
};

export const patchUserPersonalBest = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUserPersonalBest = async (id) => {
    return deleteOne(path, id);
};