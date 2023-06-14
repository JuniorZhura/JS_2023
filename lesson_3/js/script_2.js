let itemPrice = parseFloat(prompt('Введіть вартість товару:'));
let ownMoney = parseFloat(prompt('Введіть суму в наявності:'));
let enoughToBuy = ownMoney >= itemPrice;
let enoughToBuyWithTicket = ownMoney >= itemPrice + 4;

if (enoughToBuyWithTicket) {
      if(confirm ("Вдала покупка. Бажаєте додатково придбати лотерею? Вартість 4грн."))
      alert ("Дякуємо, що взяли участь у лотереї.")
      else alert ("Шкода, що відмовились від участі у лотереї.")
}
else if (enoughToBuy) {
      alert ("Бажаємо гарних покупок.")
}
else alert ("У Вас недостатньо коштів");

// ______________Другий варіант рішення. Який краще? Чи який правильніше?___________

// let itemPrice = parseFloat(prompt('Введіть вартість товару:'));
// let ownMoney = parseFloat(prompt('Введіть суму в наявності:'));
// const lotteryTicket = 4;

// if (ownMoney >= itemPrice + lotteryTicket) {
//       if(confirm ("Вдала покупка. Бажаєте додатково придбати лотерею? Вартість 4грн."))
//       alert ("Дякуємо, що взяли участь у лотереї")
//       else alert ("Шкода, що відмовились від участі у лотереї.")
// }
// else if (ownMoney >= itemPrice) {
//       alert ("Бажаємо гарних покупок.")
// }
// else alert ("У Вас недостатньо коштів.");