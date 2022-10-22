import { Router } from 'express';

import { showStatus } from '../middlewares/DeveloperMiddleware';

const userController = require("../controllers/UserController");
const fileController = require("../controllers/FileController");
const badgeController = require("../controllers/BadgeController");
const personalBestController = require("../controllers/PersonalBestController");
const userBadgeController = require("../controllers/UserBadgeController");
const userMealProductController = require("../controllers/UserMealProductController");
const userMealController = require("../controllers/UserMealController");
const userPersonalBestController = require("../controllers/UserPersonalBestController");
const unitController = require("../controllers/UnitController");
const nutrientController = require("../controllers/NutrientController");
const productController = require("../controllers/ProductController");
const productNutrientController = require("../controllers/ProductNutrientController");
const recipeController = require("../controllers/RecipeController");
const recipeProductController = require("../controllers/RecipeProductController");
const dietController = require("../controllers/DietController");
const dietMealController = require("../controllers/DietMealController");
const dietMealRecipeController = require("../controllers/DietMealRecipeController");
const dietMealProductController = require("../controllers/DietMealProductController");
const userActiveDietController = require("../controllers/UserActiveDietController");
const userMealRecipeController = require("../controllers/UserMealRecipeController");



const adminRouter = Router()
  .use("/file", fileController)
  .use("/badge", badgeController)
  .use("/personalBest", personalBestController)
  .use("/unit", unitController)
  .use("/nutrient", nutrientController);

const userRouter = Router()
  .use("/user", userController);

const userProfileRouter = Router()
  .use("/userBadge", userBadgeController)
  .use("/userPersonalBest", userPersonalBestController);

const mealRouter = Router()
  .use("/userMeal", userMealController)
  .use("/userMealProduct", userMealProductController)
  .use("/userMealRecipe", userMealRecipeController);

const dietRouter = Router()
  .use("/diet", dietController)
  .use("/dietMeal", dietMealController)
  .use("/dietMealRecipe", dietMealRecipeController)
  .use("/dietMealProduct", dietMealProductController)
  .use("/userActiveDiet", userActiveDietController);

const discoverRouter = Router()
  .use("/product", productController)
  .use("/productNutrient", productNutrientController)
  .use("/recipe", recipeController)
  .use("/recipeProduct", recipeProductController);

const standardRouter = Router()
  .use(showStatus)
  .use(adminRouter)
  .use(userRouter)
  .use(userProfileRouter)
  .use(mealRouter)
  .use(dietRouter)
  .use(discoverRouter);
export default standardRouter;