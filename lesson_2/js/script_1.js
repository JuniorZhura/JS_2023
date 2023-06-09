let firstNumber = parseFloat(prompt('Введіть перше число:'));
let secondNumber = parseFloat(prompt('Введіть друге число:'));
let sum = firstNumber + secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
document.write (
      `<table>
<tr>
<td>СУМА</td>
<td>ДОБУТОК</td>
<td>ЧАСТКА</td>
</tr>
<tr>
<td>${sum}</td>
<td>${multiplication}</td>
<td>${division}</td>
</tr>
</table>`
);
