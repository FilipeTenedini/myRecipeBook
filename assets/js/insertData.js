const recipesList = [];


function insertRecipeViewList(){
    
    const recipesLocal = document.querySelector('.recipes');

    recipesLocal.innerHTML = '';

    for (let item of recipesList){
        recipesLocal.innerHTML += `
        <div class="recipe">
            <ion-icon name="fast-food-outline"></ion-icon>
            <p class="recipe-name">${item.name}</p>
        </div>
        `    
    }
}

function recipeAreaView(){
    const recipeInfo = document.querySelector('.infos');

    document.querySelector('.recipe-add-info').classList.add('invisible');

    recipeInfo.classList.add('infos-visible');
        
    setTimeout(()=>{
        recipeInfo.classList.add('infos-visible-transition');
    },100);

}

function recipeView(item){
    const nameOf = item.querySelector('.recipe-name').innerHTML;

    recipesList.forEach((recipe)=>{
        if (recipe.name === nameOf){
            document.querySelector('.infos .add-recipe h2').innerHTML = recipe.name;
            document.querySelector('.infos .ingredients-text').innerHTML = recipe.ingredients;
            document.querySelector('.infos .prepare-text').innerHTML = recipe.prepare;
        }
    });
}

export { recipesList, insertRecipeViewList, recipeAreaView, recipeView };