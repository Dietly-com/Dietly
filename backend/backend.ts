const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;

const userRoute = require("./src/routes/UserRoute");
const fileRoute = require("./src/routes/FileRoute");
const badgeRoute = require("./src/routes/BadgeRoute");
const personalBestRoute = require("./src/routes/PersonalBestRoute");
const userBadgeRoute = require("./src/routes/UserBadgeRoute");
const userMealProductRoute = require("./src/routes/UserMealProductRoute");
const userMealRoute = require("./src/routes/UserMealRoute");
const userPersonalBestRoute = require("./src/routes/UserPersonalBestRoute");
const unitRoute = require("./src/routes/UnitRoute");
const nutrientRoute = require("./src/routes/NutrientRoute");
const productRoute = require("./src/routes/ProductRoute");
const productNutrientRoute = require("./src/routes/ProductNutrientRoute");
const recipeRoute = require("./src/routes/RecipeRoute");
const recipeProductRoute = require("./src/routes/RecipeProductRoute");
const dietRoute = require("./src/routes/DietRoute");
const dietMealRoute = require("./src/routes/DietMealRoute");
const dietMealRecipeRoute = require("./src/routes/DietMealRecipeRoute");
const dietMealProductRoute = require("./src/routes/DietMealProductRoute");
const userActiveDietRoute = require("./src/routes/UserActiveDietRoute");
const userMealRecipeRoute = require("./src/routes/UserMealRecipeRoute");

import dotenv from "dotenv";
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/file", fileRoute);
app.use("/user", badgeRoute);
app.use("/personalBest", personalBestRoute);
app.use("/userBadge", userBadgeRoute);
app.use("/userMealProduct", userMealProductRoute);
app.use("/userMeal", userMealRoute);
app.use("/userPersonalBest", userPersonalBestRoute);
app.use("/unit", unitRoute);
app.use("/nutrient", nutrientRoute);
app.use("/product", productRoute);
app.use("/productNutrient", productNutrientRoute);
app.use("/recipe", recipeRoute);
app.use("/recipeProduct", recipeProductRoute);
app.use("/diet", dietRoute);
app.use("/dietMeal", dietMealRoute);
app.use("/dietMealRecipe", dietMealRecipeRoute);
app.use("/dietMealProduct", dietMealProductRoute);
app.use("/userActiveDiet", userActiveDietRoute);
app.use("/userMealRecipe", userMealRecipeRoute);

app.listen(port, () => {
  console.log(`⚡️[Backend]: Server is running at http://localhost:${port}`);
});
