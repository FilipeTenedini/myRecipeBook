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

    const addView = document.querySelector('.recipe-add-info');
    const infoView = document.querySelector('.infos');

    addView.classList.add('upper');
    infoView.classList.add('infos-visible');
    
    setTimeout(()=>{
        addView.classList.add('invisible');
        infoView.classList.add('infos-visible-transition');
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

function returnAddPage(){
   const addView = document.querySelector('.recipe-add-info');
   const infoView = document.querySelector('.infos');

   infoView.classList.remove('infos-visible-transition');
   
   setTimeout(()=>{
        infoView.classList.remove('infos-visible');
        addView.classList.remove('invisible');

        setTimeout(()=>{ 
            addView.classList.remove('upper');
        }, 100);

    }, 100);
}

export { 
    recipesList, 
    insertRecipeViewList, 
    recipeAreaView, 
    recipeView, 
    returnAddPage 
};