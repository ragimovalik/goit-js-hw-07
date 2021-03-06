/*Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>

Сколько символов должно быть в инпуте, указывается в его 
атрибуте data-length.
Если введено подходящее количество, то border инпута становится 
зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
// ----------------------------
Mentor:
В таске 6 прежде чем добавить класс нужно убрать противоположный 
класс иначе ваш функционал отрабатывает верно только один раз
*/

const inputEl = document.querySelector("#validation-input");
const inputTextLength = inputEl.getAttribute("data-length");

inputEl.classList.add("validation-input");
// console.log(Number.isInteger(inputTextLength));

inputEl.addEventListener("blur", (event) => {
  const inputedText = event.target.value;

  inputedText.length === Number(inputTextLength)
    ? inputEl.classList.add("valid") || inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid") || inputEl.classList.remove("valid");
});
