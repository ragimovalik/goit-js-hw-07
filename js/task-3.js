/*
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>

Используй массив объектов images для создания тегов img вложенных 
в li. Для создания разметки используй шаблонные строки и 
insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через 
css-классы.*/

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesEl = document.querySelector("#gallery");
imagesEl.classList.add("gallery-flex");

/*
const imagesAdder = (array) =>
  array.forEach((image) => {
    imagesEl.insertAdjacentHTML(
      "afterbegin",
      `<li><img alt='${image.alt}' src=${image.url}></li>`
    );
  });

*/

const imagesAdder = (array) => {
  const arr = array.map(
    (image) => `<li><img alt='${image.alt}' src=${image.url}></li>`
  );
  return imagesEl.insertAdjacentHTML("afterbegin", arr.join(''));
};

// const imagesAdder = (array) => {
//   array
//     // .map((image) => `<li><img alt='${image.alt}' src=${image.url}></li>`)
//     .map((image) =>
//       imagesEl.insertAdjacentHTML(
//         "afterbegin",
//         `<li><img alt='${image.alt}' src=${image.url}></li>`
//       )
//     );
// };

imagesAdder(images);
