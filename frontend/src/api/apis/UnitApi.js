import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'unit';

export const postUnit = async (data) => {
    return postOne(path, data);
};

export const getUnit = async (id) => {
    return getOne(path, id);
};

export const getUnits = async () => {
    return getMany(path);
};

export const patchUnit = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUnit = async (id) => {
    return deleteOne(path, id);
};