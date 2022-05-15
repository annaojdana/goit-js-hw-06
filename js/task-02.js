const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients')

const li1 = document.createElement('li');
li1.textContent = ingredients[0];

const li2 = document.createElement('li');
li2.textContent = ingredients[1];

const li3 = document.createElement('li');
li3.textContent = ingredients[2];

const li4 = document.createElement('li');
li4.textContent = ingredients[3];

const li5 = document.createElement('li');
li5.textContent = ingredients[4];

ingredientsUl.append(li1, li2, li3, li4, li5);