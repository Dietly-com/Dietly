export const getRecipeProductWithNutrients = (recipeProduct: any) => {
    let recipeProductNutrients:any = [];
    for (let productNutrient of recipeProduct.product.productNutrients) {
        let recipeProductNutrient = {
            "nutrientId": 0,
            "quantity": 0,
            "nutrient": {}
        };
        recipeProductNutrient.quantity = productNutrient.quantity*(recipeProduct.quantity/100);
        recipeProductNutrient.nutrient = productNutrient.nutrient;
        recipeProductNutrient.nutrientId = productNutrient.nutrientId;
        recipeProductNutrients.push(recipeProductNutrient)
    }

    recipeProduct.recipeProductNutrients = recipeProductNutrients;
    return recipeProduct;
}

export const getRecipeProductsWithNutrients = (recipeProducts: any) => {
    let recipeProductsWithNutrients = [];
    for (let recipeProduct of recipeProducts) {
        recipeProductsWithNutrients.push(getRecipeProductWithNutrients(recipeProduct));
    }
    return recipeProductsWithNutrients;
}

const getRecipeNutrientsMap = (recipeProducts: any) => {
    let recipeNutrientsMap:any = [];
    for (let recipeProduct of recipeProducts) {
        for (const recipeProductNutrient of recipeProduct.recipeProductNutrients) {
            if(recipeNutrientsMap[recipeProductNutrient.nutrientId]) {
                recipeNutrientsMap[recipeProductNutrient.nutrientId].push(recipeProductNutrient);
            } else {
                recipeNutrientsMap[recipeProductNutrient.nutrientId] = [recipeProductNutrient];
            }
        }
    }
    recipeNutrientsMap = recipeNutrientsMap.filter(function (el:any) {
        return el != null;
      });
    return recipeNutrientsMap;
}

export const getRecipeWithNutrients = (recipe: any) => {
    recipe.recipeProducts = getRecipeProductsWithNutrients(recipe.recipeProducts);
    let recipeNutrientsMap = getRecipeNutrientsMap(recipe.recipeProducts);

    let recipeNutrients:any = [];
    for (let recipeNutrientsMapElement of recipeNutrientsMap) {
        let recipeNutrient:any = undefined;
        if(recipeNutrientsMapElement!==null) {
            for (const recipeNutrientsMapElementNutrient of recipeNutrientsMapElement) {
                if(recipeNutrient!==undefined) {
                    recipeNutrient.quantity = recipeNutrient.quantity + recipeNutrientsMapElementNutrient.quantity;
                } else {
                    recipeNutrient = recipeNutrientsMapElementNutrient;
                }
            }
        }
        recipeNutrients.push(recipeNutrient);
    }
    recipe.recipeNutrients = recipeNutrients;
    return recipe;
}



export const getUserMealProductWithNutrients = (userMealProduct: any) => {

}

export const getUserMealProductsWithNutrients = (userMealProducts: any) => {

}

export const getUserMealRecipeWithNutrients = (userMealRecipe: any) => {

}

export const getUserMealRecipesWithNutrients = (userMealRecipes: any) => {

}

const getUserMealNutrientsMap = (userMealProducts: any, userMealRecipes: any) => {

}

export const getUserMealWithNutrients = (userMeal: any) => {

}

export const getUserMealsWithNutrients = (userMeal: any) => {

}