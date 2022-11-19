import { describe, it} from '@jest/globals';
import { app } from '../../backend_test';
const stest = require("supertest");

describe("Authorization",() => {
    describe("Given no login or password",() => {
        it("Should return 401", () => {
            stest(app).post('/api/v1/auth').expect(401);
        })
    })
    describe("Given bad login",() => {
        it("Should return 401", () => {
            stest(app).post('/api/v1/auth').send({
                "data":{
                    "login":"66as66ads6bt8vbv6t8as6t8d"
                }
            }).expect(401);
        })
    })
    describe("Given good login",() => {
        it("Should return 200", () => {
            stest(app).post('/api/v1/auth').send({
                "data":{
                    "login":"admin",
                    "password":"admin"
                }
            }).expect(200);
        })
    })
})