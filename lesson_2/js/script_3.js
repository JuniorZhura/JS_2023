let itemsNumber = parseInt(prompt("Введіть кількість товару:"));
let itemsPrice = parseFloat(prompt("Введіть ціну товару у гривнях:"));
let totalPrice = itemsPrice * itemsNumber;
const vat = 5;
let customerVat = (totalPrice / 100) * vat;
document.write(`Загальна вартість товару: ${totalPrice}грн <br> ПДВ: ${customerVat.toFixed(2)}грн`);

