import axios from 'axios';

const METHOD_POST = 'post';
const METHOD_GET = 'get';
const METHOD_PATCH = 'patch';
const METHOD_DELETE = 'delete';
const URL = 'http://localhost:8080/api/v1/';
const RESPONSE_TYPE = 'stream';
const HEADERS = {
    Authorization : `Bearer ${localStorage.getItem("access_token")}`
};

export const postOne = async (path, data) => {
    try {
        axios({
            method: METHOD_POST,
            url: URL + path,
            responseType: RESPONSE_TYPE,
            headers: HEADERS,
            params: {},
            data: data
          })
        .then(response => {
            return response.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const getOne = async (path, id) => {
    try {
        axios({
            method: METHOD_GET,
            url: URL + path + '/' + id,
            responseType: RESPONSE_TYPE,
            headers: HEADERS,
            params: {},
            data: {}
          })
        .then(response => {
            return response.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const getMany = async (path) => {
    try {
        axios({
            method: METHOD_GET,
            url: URL + path,
            responseType: RESPONSE_TYPE,
            headers: HEADERS,
            params: {},
            data: {}
          })
        .then(response => {
            return response.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const patchOne = async (path, id, data) => {
    try {
        axios({
            method: METHOD_PATCH,
            url: URL + path + '/' + id,
            responseType: RESPONSE_TYPE,
            headers: HEADERS,
            params: {},
            data: data
          })
        .then(response => {
            return response.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteOne = async (path, id) => {
    try {
        axios({
            method: METHOD_DELETE,
            url: URL + path + '/' + id,
            responseType: RESPONSE_TYPE,
            headers: HEADERS,
            params: {},
            data: {}
          })
        .then(response => {
            return response.data
        });
    } catch (err) {
        console.log(err);
    }
};