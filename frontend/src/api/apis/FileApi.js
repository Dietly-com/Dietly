import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'file';

export const postFile = async (data) => {
    return postOne(path, data);
};

export const getFile = async (id) => {
    return getOne(path, id);
};

export const getFiles = async () => {
    return getMany(path);
};

export const patchFile = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteFile = async (id) => {
    return deleteOne(path, id);
};