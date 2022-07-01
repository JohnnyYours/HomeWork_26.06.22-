//Завершите функцию, чтобы она возвращала массив всех абзацев, содержащих текст длиной менее 10 символов.

const getShortTextParagraphs = () => {
	return [...document.querySelectorAll("p")].filter(text => text.textContent.length < 10);
}

// Sample usage - do not modify
console.log(getShortTextParagraphs());