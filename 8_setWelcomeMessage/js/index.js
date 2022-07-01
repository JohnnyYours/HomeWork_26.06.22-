/*
Завершите функцию, чтобы она приветствовала пользователя, написав: `"Hello {name}"`, где имя находится внутри тега `<strong>...</strong>`, родителем которого выступает тег `p` с идентификатором `welcome-message`. В задаче предполагается, что данный пользователь действительно существует, что подтверждает безопасность его действий.
*/

/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  document.querySelector(
    "#welcome-message"
  ).innerHTML = `"Hello <strong>${name}</strong>"`;
};
// Sample usage - do not modify
setWelcomeMessage("Sam");
