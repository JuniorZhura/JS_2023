
for (let i = 0; i < 5; i++) {
      let firstNumber = parseFloat(prompt('first number'));
      let secondNumber = parseFloat(prompt('second number'));
      if (secondNumber > firstNumber) {
            let minNumber = firstNumber;
            firstNumber = secondNumber;
            secondNumber = minNumber;
            document.write(`<div>${firstNumber}</div>`);
      }
      else {
            document.write(`<div>${firstNumber}</div>`);
      }
}
// Введіть з клавіатури 5 пар чисел. Порівняйте числа у кожній парі та надрукуйте більше з них.