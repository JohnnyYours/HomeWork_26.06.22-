/*
Завершите функцию, чтобы она возвращала текст внутри элемента. Функция получает селектор элемента. Код не должен ломаться, если селектор не найден. Для таких случаев, возвращайте строку "element not found".
*/

/**
 * @param {string} cssSelector
 */
 const getTextFromSelector = cssSelector => {
	return document.querySelector(cssSelector)?.textContent != undefined ? document.querySelector(cssSelector).textContent : "element not found";
}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // undefined