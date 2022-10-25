import { postOneAuth } from '../services/AuthService';

const path = 'auth';

export const postAuth = async (data) => {
    return new Promise( (resolve, reject) => {
        postOneAuth(path, data)
        .then(responseBody => {
            resolve(responseBody)
        })
        .catch(error => {
            reject(error)
        })
    })
};