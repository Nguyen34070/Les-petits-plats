export default class recipeCard {
    constructor(recipe) {
        this.recipe = recipe;
    }

    createRecipeCard() {
        const article = document.createElement('article');
        const recipeCard = `
           <img class="recipe_thumbnail" src="./assets/recettes/${this.recipe.image}">
           <h2 class="recipe_name">${this.recipe.name}</h2>
           <p class=""</p>
        `;
        article.innerHTML = recipeCard;
    }

}