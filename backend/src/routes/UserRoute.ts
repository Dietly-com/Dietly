import { Router } from 'express';

import { verifyUser } from '../middlewares/UserMiddleware';

const userController = require("../controllers/UserController");

const userRouter = Router()
  .use("/user", userController);
export default userRouter;