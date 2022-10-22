import express, { Router } from 'express';

import {createUser, selectUser, selectUsers, authUser } from '../controllers/userController';


const router: Router = express.Router();
router.post("/", async (req, res) => {
    createUser(req, res);
})

router.get("/:userid",  async (req, res) => {
    selectUser(req, res);
})

router.get("/",  async (req, res) => {
    selectUsers(req, res);
})

router.post("/auth", async (req, res) => {
    authUser(req, res);
})

module.exports = router