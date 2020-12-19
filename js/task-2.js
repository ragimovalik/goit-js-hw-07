"use strict";

/**
 *  HTML есть пустой список ul#ingredients.
<ul id="ingredients"></ul>

В JS есть массив строк.
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов используй 
document.createElement().
 */

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listItemCreation = (arr) => {
  return arr.map((item) => {
    const itemTitleEl = document.createElement("li");
    itemTitleEl.textContent = item;
    return itemTitleEl;
  });
};

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...listItemCreation(ingredients));