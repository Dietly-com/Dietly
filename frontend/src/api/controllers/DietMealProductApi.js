import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';

const path = 'dietMealProduct';

export const postDietMealProduct = async (data) => {
    return new Promise( (resolve, reject) => {
        postOne(path, data)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};

export const getDietMealProduct = async (id) => {
    return new Promise( (resolve, reject) => {
        getOne(path, id)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};

export const getDietMealProducts = async () => {
    return new Promise( (resolve, reject) => {
        getMany(path)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};

export const patchDietMealProduct = async (id, data) => {
    return new Promise( (resolve, reject) => {
        patchOne(path, id, data)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};

export const deleteDietMealProduct = async (id) => {
    return new Promise( (resolve, reject) => {
        deleteOne(path, id)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};