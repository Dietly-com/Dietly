import { postOne, getOne, getMany, patchOne, deleteOne } from '../services/StandardService';
export const Joi = require("joi");

const schema = {
    userId: Joi.number().required().label("User"),
    name: Joi.string().required().label("Name"),
    time: Joi.date().required().label("Time")
};
const path = 'userMeal';

export const postUserMeal = async (data) => {
    return new Promise( (resolve, reject) => {
        postOne(path, data, schema)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};

export const getUserMeal = async (id) => {
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

export const getUserMeals = async (params) => {
    return new Promise( (resolve, reject) => {
        getMany(path, params)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};

export const patchUserMeal = async (id, data) => {
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

export const deleteUserMeal = async (id) => {
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