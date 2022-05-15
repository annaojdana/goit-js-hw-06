const categoriesName = document.querySelectorAll("h2");
const categoriesNameLength = categoriesName.length;

const categoriesList = document.querySelectorAll(".item");
const animals = categoriesList[0].querySelectorAll("li");
const products = categoriesList[1].querySelectorAll("li");
const technologies = categoriesList[2].querySelectorAll("li");


console.log(
`Number of categories: ${categoriesNameLength}

Category: ${categoriesName[0].textContent}
Elements: ${animals.length}

Category: ${categoriesName[1].innerText}
Elements: ${products.length}

Category: ${categoriesName[2].innerText}
Elements: ${technologies.length}`
);