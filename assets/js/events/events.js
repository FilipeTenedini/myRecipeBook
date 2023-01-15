import { recipesList, insertRecipeViewList, recipeAreaView, recipeView } from '../insertData.js';

document.querySelector('.save-recipe').addEventListener('click', (e)=>{
    e.preventDefault();

    const recipeName = document.querySelector('.name-text').value;
    const recipeIngredients = document.querySelector('.ingredients-text').value;
    const recipePrepare = document.querySelector('.prepare-text').value;

    const receita = {
        name: recipeName,
        ingredients: recipeIngredients,
        prepare: recipePrepare
    }
    
    recipesList.push(receita);
    
    insertRecipeViewList();

    addRecipeFunction();
});

function addRecipeFunction() {
    document.querySelectorAll('.recipe').forEach((item)=>{
        item.addEventListener('click', ()=> {
            recipeAreaView();
            recipeView(item);
        });
    });
}

document.querySelector('.search-bar').addEventListener('keyup',()=>{
    const recipesLocal = document.querySelector('.recipes');
    const key = document.querySelector('.search-bar').value;
    recipesLocal.innerHTML = '';
    
    recipesList.forEach((item)=>{
        if (item.name.startsWith(key)){

            recipesLocal.innerHTML += `
            <div class="recipe">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p class="recipe-name">${item.name}</p>
            </div>
            `    
        }
    });
    
    addRecipeFunction()
});

export {};