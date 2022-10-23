import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'user';

export const getUser = async (id) => {
    return getOne(path, id);
};

export const getUsers = async () => {
    return getMany(path);
};

export const patchUser = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUser = async (id) => {
    return deleteOne(path, id);
};