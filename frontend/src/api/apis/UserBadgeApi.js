import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'userBadge';

export const postUserBadge = async (data) => {
    return postOne(path, data);
};

export const getUserBadge = async (id) => {
    return getOne(path, id);
};

export const getUserBadges = async () => {
    return getMany(path);
};

export const patchUserBadge = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteUserBadge = async (id) => {
    return deleteOne(path, id);
};