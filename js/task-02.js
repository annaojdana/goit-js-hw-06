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
li1.className = "item";

const li2 = document.createElement('li');
li2.textContent = ingredients[1];
li2.className = "item";

const li3 = document.createElement('li');
li3.textContent = ingredients[2];
li3.className = "item";

const li4 = document.createElement('li');
li4.textContent = ingredients[3];
li4.className = "item";

const li5 = document.createElement('li');
li5.textContent = ingredients[4];
li5.className = "item";

ingredientsUl.append(li1, li2, li3, li4, li5);