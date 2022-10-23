import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'personalBest';

export const postPersonalBest = async (data) => {
    return postOne(path, data);
};

export const getPersonalBest = async (id) => {
    return getOne(path, id);
};

export const getPersonalBests = async () => {
    return getMany(path);
};

export const patchPersonalBest = async (id, data) => {
    return patchOne(path, id, data);
};

export const deletePersonalBest = async (id) => {
    return deleteOne(path, id);
};