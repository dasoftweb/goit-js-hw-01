const ADMIN_PASSWORD = "jqueryismyjam";
const password = prompt("Введите пароль!");
let message = "Доступ запрещен, неверный пароль!";

if (password === null) {
  message = "Отменено пользователем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
}

alert(message);