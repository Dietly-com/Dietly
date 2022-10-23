import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'badge';

export const postBadge = async (data) => {
    return postOne(path, data);
};

export const getBadge = async (id) => {
    return getOne(path, id);
};

export const getBadges = async () => {
    return getMany(path);
};

export const patchBadge = async (id, data) => {
    return patchOne(path, id, data);
};

export const deleteBadge = async (id) => {
    return deleteOne(path, id);
};