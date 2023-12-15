let customerMoney = parseFloat(prompt("Введіть суму:"));
const percent = 20;
let result = customerMoney;
for (let years = 0; years < 20; years++) {
  let yearProfit = (result / 100) * percent;
  result += yearProfit;
}
document.write(`<div>Ви отримаете ${result.toFixed()} грн</div>`)


// Інвестор вклав N тис. грн (вводить користувач) на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

