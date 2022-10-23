import express, { Router } from 'express';
import { search } from '../services/SearchService';
import { verifyUser } from '../middlewares/UserMiddleware';

const router: Router = express.Router();
router.use(verifyUser);

router.get("/:term",  async (req, res) => {
    search(req, res);
})

module.exports = router