let firstPrice = parseFloat(prompt('Введіть вартість першого товару:'));
let firstQuantity = parseFloat(prompt('Введіть кількість першого товару:'));
let secondPrice = parseFloat(prompt('Введіть вартість другого товару:'));
let secondQuantity = parseFloat(prompt('Введіть кількість другого товару:'));
let thirdPrice = parseFloat(prompt('Введіть вартість третього товару:'));
let thirdQuantity = parseFloat(prompt('Введіть кількість третього товару:'));
let totalFirstPrice = firstPrice * firstQuantity;
let totalSecondPrice = secondPrice * secondQuantity;
let totalThirdPrice = thirdPrice * thirdQuantity;
let totalReceipt = totalFirstPrice + totalSecondPrice + totalThirdPrice;
document.write (
`<table>
<tr>
<td>Найменування</td>
<td>Ціна</td>
<td>Кількість</td>
<td>Загальна вартість товару</td>
<td>Загальна вартість чеку</td>
</tr>
<tr>
<td>Перший товар</td>
<td>${firstPrice}грн</td>
<td>${firstQuantity}</td>
<td>${totalFirstPrice}грн</td>
<td></td>
</tr>
<tr>
<td>Другий товар</td>
<td>${secondPrice}грн</td>
<td>${secondQuantity}</td>
<td>${totalSecondPrice}грн</td>
<td></td>
</tr>
<tr>
<td>Третій товар</td>
<td>${thirdPrice}грн</td>
<td>${thirdQuantity}</td>
<td>${totalThirdPrice}грн</td>
<td></td>
</tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>${totalReceipt}грн</td>
</tr>
</table>`
);
