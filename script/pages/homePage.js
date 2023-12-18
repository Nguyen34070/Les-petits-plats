import Api from "../api/Api.js";
import Recipes from "../models/recipes.js";
import recipeCard from "../templates/recipeCard.js";

const recipeSection = document.querySelector(".section_recipe");
const recipeApi = new Api("./data/recipes.json");

const displayRecipe = async () => {
    const recipeData = await recipeApi.get();
    const recipes = recipeData.recipes;

    recipes
    .map(recipe => new Recipes(recipe))
    .forEach(recipe => {
        const template = new recipeCard(recipe);
        const RecipeCards = template.createRecipeCard();
        recipeSection.appendChild(RecipeCards);
    });
};
displayRecipe();