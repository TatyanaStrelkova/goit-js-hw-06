const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientRef = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => { 
  const ingredientItemsRef = document.createElement('li');
  ingredientItemsRef.classList.add('item');
  ingredientItemsRef.textContent = ingredient;
  return ingredientItemsRef;
})

ingredientRef.append(...items); 

 

