"use strict";

/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий 
в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента 
(тега h2) и количество элементов в категории (всех 
вложенных в него элементов li).

Например для первой категории получится:
Категория: Животные
Количество элементов: 4 */

const categoriesList = document.querySelector("ul#categories");
console.log(`В списке ${categoriesList.childElementCount} категории.`);
// console.log(`В списке ${categoriesList.children.length} категории.`);

const listItemsEl = document.querySelectorAll("ul#categories > li");
listItemsEl.forEach((item) => {
  const itemTitleEl = item.querySelector("h2");
  const itemContentEl = item.querySelector("ul");
  console.log(
    `Категория: ${itemTitleEl.textContent}\n` + `Количество элементов ${itemContentEl.children.length}`
  );
});


