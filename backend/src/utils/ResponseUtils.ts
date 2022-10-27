import { Response } from 'express';

//STATUS
export const STATUS_OK = 200;
export const STATUS_CREATED = 201;
export const STATUS_ACCEPTED = 202;
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 401;
export const STATUS_NOT_FOUND = 404;
export const STATUS_CONFLICT = 409;
export const STATUS_INTERNAL_SERVER_ERROR = 500;

//MESSAGE_SUCCESS
export const MESSAGE_CREATED_RECORD = {
    text: 'Record created',
    type: 'success',
    code: 'S1'
}

export const MESSAGE_UPDATED_RECORD = {
    text: 'Record updated',
    type: 'success',
    code: 'S2'
}

export const MESSAGE_FIND_RECORD = {
    text: 'Record found',
    type: 'success',
    code: 'S3'
}

export const MESSAGE_FIND_RECORDS = {
    text: 'Records found',
    type: 'success',
    code: 'S4'
}

export const MESSAGE_DELETED_RECORD = {
    text: 'Record deleted',
    type: 'success',
    code: 'S5'
}

export const MESSAGE_LOGGED_USER = {
    text: 'Logged in user',
    type: 'success',
    code: 'S6'
}

//MESSAGE_ERROR
export const MESSAGE_INTERNAL_SERVER_ERROR = {
    text: 'Internal server error',
    type: 'error',
    code: 'E1'
}

export const MESSAGE_WRONG_LOGIN = {
    text: 'User with such a login does not exist',
    type: 'error',
    code: 'E2'
}

export const MESSAGE_WRONG_LOGIN_DATA = {
    text: 'Wrong login or password',
    type: 'error',
    code: 'E3'
}

export const MESSAGE_WRONG_TOKEN = {
    text: 'Sign in',
    type: 'error',
    code: 'E4'
}

export const MESSAGE_NOT_FOUND_RECORD = {
    text: 'Record not found',
    type: 'error',
    code: 'E5'
}

export class ResponseBuilder {
    response:Response;
    responseBody: {
        data: any,
        result: {
            success: boolean,
            messages: any
        }
    }

    constructor(response: Response) {
        this.response = response;
        this.responseBody = {
            data: {},
            result: {
                success: false,
                messages: []
            }
        }
    }

    withStatus(status: number) {
        this.response.status(status);
        return this;
    }

    withResponseBodyData(data: any) {
        this.responseBody.data = data;
        return this;
    }

    withResponseBodySuccess(success: any) {
        this.responseBody.result.success = success;
        return this;
    }

    withResponseBodyMessage(message: any) {
        this.responseBody.result.messages.push(message);
        return this;
    }

    send() {
        this.response.send(this.responseBody);
        return this.response;
    }
}