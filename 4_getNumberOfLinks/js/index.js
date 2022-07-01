//Завершите функцию, чтобы она возвращала количество ссылок на странице.

const getNumberOfLinks = () => {
	return document.querySelectorAll("a").length;
}

// Sample usage - do not modify
console.log(getNumberOfLinks()); // 5