let price;
let userСountry = prompt("Пожалуйста, введите страну доставки!");

if (userСountry !== null) {
  userСountry = userСountry.toLowerCase();
  const normilizedСountry =
    userСountry.charAt(0).toUpperCase() + userСountry.slice(1);

  switch (userСountry) {
    case "китай":
      price = 100;
      alert(`Доставка в ${normilizedСountry} будет стоить ${price} кредитов`);
      break;

    case "чили":
      price = 250;
      alert(`Доставка в ${normilizedСountry} будет стоить ${price} кредитов`);
      break;

    case "австралия":
      price = 170;
      alert(`Доставка в ${normilizedСountry} будет стоить ${price} кредитов`);
      break;

    case "индия":
      price = 80;
      alert(`Доставка в ${normilizedСountry} будет стоить ${price} кредитов`);
      break;

    case "ямайка":
      price = 120;
      alert(`Доставка в ${normilizedСountry} будет стоить ${price} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
} else {
  alert("Отмена ввода");
}
