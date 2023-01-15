import { addRecipeFunction } from './events/events.js';

const recipesList = [
    {name:'Bolo de chocolate', ingredients: '4 ovos\n\n4 colheres (sopa) de chocolate em pó\n\n2 colheres (sopa) de manteiga\n\n3 xícaras (chá) de farinha de trigo\n\n2 xícaras (chá) de açúcar\n\n2 colheres (sopa) de fermento\n\n1 xícara (chá) de leite', prepare:'Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.\n\nAdicione o fermento e misture com uma espátula delicadamente.\n\nEm uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.' },
    {name:'Bolinho de Chuva', ingredients: '1 xícara de açúcar\n\n2 ovos\n\n2 e 1/2 xícaras de farinha de trigo\n\n1 colher (sopa) de fermento em pó\n\n3 colheres (sopa) de açúcar para polvilhar\n\n1 colher (sopa) de canela para polvilhar\n\n1 litro de óleo para fritar', prepare:'Misture todos os ingredientes até obter uma massa cremosa e homogênea.\n\nDeixe aquecer uma panela com bastante óleo para que os bolinhos possam boiar.\n\nQuando o óleo estiver bem quente (180º C), com uma colher, comece a colocar pequenas quantidades de massa, e frite até que dourem por inteiro.\n\nColoque os bolinhos sobre papel absorvente e depois passe-os no açúcar com canela.' },
];

function firstAddRecipesInList(){
    const recipesLocal = document.querySelector('.recipes');

    for (let item of recipesList){
        recipesLocal.innerHTML += `
        <div class="recipe">
            <ion-icon name="fast-food-outline"></ion-icon>
            <p class="recipe-name">${item.name}</p>
        </div>
        `    
    }
    addRecipeFunction();
}

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

function recipeInfosAdd(item){
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


firstAddRecipesInList();

export { 
    recipesList, 
    insertRecipeViewList, 
    recipeAreaView, 
    recipeInfosAdd, 
    returnAddPage 
};