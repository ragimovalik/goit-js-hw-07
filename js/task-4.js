/**Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее 
значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения 
значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление 
интерфейса
// ----------------------
Mentor: 
В таске 4 в переменной counterValue нужно хранить значение 
счетчика, а не ссылку на элемент ДОМ дерева.
 */

const counterValueEl = document.querySelector("#value");
let counterValue = 0;

const increment = () => (counterValueEl.textContent = ++counterValue);
const decrement = () => (counterValueEl.textContent = --counterValue);

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", () => increment());
decrementBtn.addEventListener("click", () => decrement());
