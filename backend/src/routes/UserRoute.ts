import express, { Router } from 'express';

import {createUser, findUser, findUsers, authUser } from '../controllers/UserController';


const router: Router = express.Router();
router.post("/", async (req, res) => {
    createUser(req, res);
})

router.get("/:id",  async (req, res) => {
    findUser(req, res);
})

router.get("/",  async (req, res) => {
    findUsers(req, res);
})

router.post("/auth", async (req, res) => {
    authUser(req, res);
})

module.exports = router