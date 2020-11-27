let total = 0;
while (true) {
  let input = prompt("Пожалуйста, введите число!");
  if (input === null) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert("Введите число!!!");
    continue;
  }
  total += input;
}
alert(`Общая сумма чисел равна ${total}.`);
