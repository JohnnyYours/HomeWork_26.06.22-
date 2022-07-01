//Завершите функцию, чтобы она записывала текст каждой ссылки в консоль.

const logLinksTexts = () => {
  document
    .querySelectorAll("a")
    .forEach((item) => console.log(item.textContent));
};

// Sample usage - do not modify
logLinksTexts();
