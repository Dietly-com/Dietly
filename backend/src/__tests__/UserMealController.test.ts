import { describe, it, beforeAll, expect } from '@jest/globals';
import { app } from '../../backend_test';
let request = require('supertest')(app);
let auth: string;
let toDelete: Number;

beforeAll(async () => {
    const temp = await request
        .post('/api/v1/auth')
        .send({
            data: {
                login: "test",
                password: "PasswordForTesting"
            }
        })
    auth = temp.body.data.token
});


describe("CreateOne endpoint", () => {
    describe("Given no data", () => {
        it("Should return 400", async () => {
            const temp = await request
                .post('/api/v1/userMeal')
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(400)
        })
    })
    describe("Given bad data", () => {
        it("Should return 400", async () => {
            const temp = await request
                .post('/api/v1/userMeal')
                .auth(auth, { type: "bearer" })
                .send({
                    data: {
                        test: "test"
                    }
                })
            expect(temp.status).toBe(400)
        })
    })
    describe("Given good data", () => {
        it("Should return 201", async () => {
            const temp = await request
                .post('/api/v1/userMeal')
                .auth(auth, { type: "bearer" })
                .send({
                    data: {
                        day: 19,
                        month: 12,
                        year: 2022,
                        hour: 12,
                        minute: 10,
                        name: "test",
                        userId: 1
                    }
                })
            expect(temp.status).toBe(201)
            toDelete = temp.body.data.id;
        })
    })
})

describe("Get endpoint", () => {
    describe("Given bad data", () => {
        it("Should return 400", async () => {
            const temp = await request
                .get('/api/v1/userMeal/ds')
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(400)
        })
    })

    describe("Given good data - id", () => {
        it("Should return 200", async () => {
            const temp = await request
                .get('/api/v1/userMeal/' + toDelete)
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(200)
        })
    })

    describe("Given good data - no id", () => {
        it("Should return 200", async () => {
            const temp = await request
                .get('/api/v1/userMeal/')
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(200)
        })
    })
})

describe("Patch endpoint", () => {
    describe("Given no data", () => {
        it("Should return 404", async () => {
            const temp = await request
                .patch('/api/v1/userMeal')
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(404)
        })
    })

    describe("Given bad data", () => {
        it("Should return 400", async () => {
            const temp = await request
                .patch('/api/v1/userMeal/ds')
                .auth(auth, { type: "bearer" })
                .send({
                    data: {
                        quantity: "test"
                    }
                })
            expect(temp.status).toBe(400)
        })
    })

    describe("Given good data", () => {
        it("Should return 200", async () => {
            const temp = await request
                .patch('/api/v1/userMeal/' + toDelete)
                .auth(auth, { type: "bearer" })
                .send({
                    data: {
                        name: " test2"
                    }
                })
            expect(temp.status).toBe(200)
        })
    })
})


describe("DeleteOne endpoint", () => {
    describe("Given no data", () => {
        it("Should return 404", async () => {
            const temp = await request
                .delete('/api/v1/userMeal/')
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(404)
        })
    })

    describe("Given bad data", () => {
        it("Should return 400", async () => {
            const temp = await request
                .delete('/api/v1/userMeal/ds')
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(400)
        })
    })

    describe("Given good data", () => {
        it("Should return 200", async () => {
            const temp = await request
                .delete('/api/v1/userMeal/' + toDelete)
                .auth(auth, { type: "bearer" })
            expect(temp.status).toBe(200)
        })
    })
})

