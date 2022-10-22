import { Router } from 'express';

import { verifyUser } from '../middlewares/UserMiddleware';

const userController = require("./src/controllers/UserController");
const fileController = require("./src/controllers/FileController");
const badgeController = require("./src/controllers/BadgeController");
const personalBestController = require("./src/controllers/PersonalBestController");
const userBadgeController = require("./src/controllers/UserBadgeController");
const userMealProductController = require("./src/controllers/UserMealProductController");
const userMealController = require("./src/controllers/UserMealController");
const userPersonalBestController = require("./src/controllers/UserPersonalBestController");
const unitController = require("./src/controllers/UnitController");
const nutrientController = require("./src/controllers/NutrientController");
const productController = require("./src/controllers/ProductController");
const productNutrientController = require("./src/controllers/ProductNutrientController");
const recipeController = require("./src/controllers/RecipeController");
const recipeProductController = require("./src/controllers/RecipeProductController");
const dietController = require("./src/controllers/DietController");
const dietMealController = require("./src/controllers/DietMealController");
const dietMealRecipeController = require("./src/controllers/DietMealRecipeController");
const dietMealProductController = require("./src/controllers/DietMealProductController");
const userActiveDietController = require("./src/controllers/UserActiveDietController");
const userMealRecipeController = require("./src/controllers/UserMealRecipeController");



const adminRouter = Router()
  .use(verifyUser)
  .use("/file", fileController)
  .use("/badge", badgeController)
  .use("/personalBest", personalBestController)
  .use("/unit", unitController)
  .use("/nutrient", nutrientController);

const userRouter = Router()
  .use("/user", userController);

const userProfileRouter = Router()
  .use(verifyUser)
  .use("/userBadge", userBadgeController)
  .use("/userPersonalBest", userPersonalBestController);

const mealRouter = Router()
  .use(verifyUser)
  .use("/userMeal", userMealController)
  .use("/userMealProduct", userMealProductController)
  .use("/userMealRecipe", userMealRecipeController);

const dietRouter = Router()
  .use(verifyUser)
  .use("/diet", dietController)
  .use("/dietMeal", dietMealController)
  .use("/dietMealRecipe", dietMealRecipeController)
  .use("/dietMealProduct", dietMealProductController)
  .use("/userActiveDiet", userActiveDietController);

const discoverRouter = Router()
  .use(verifyUser)
  .use("/product", productController)
  .use("/productNutrient", productNutrientController)
  .use("/recipe", recipeController)
  .use("/recipeProduct", recipeProductController);

const standardRouter = Router()
  .use("/api/v1", [adminRouter, userRouter, userProfileRouter, mealRouter, dietRouter, discoverRouter])
export default standardRouter;