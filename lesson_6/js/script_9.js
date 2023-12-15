let number = parseInt(prompt("Введіть натуральне число"));
for (let i = 1; i <= number; i++) {
      if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0)
      document.write(`<div>${number}</div>`)
}
// Задано натуральне число N. Знайти кількість натуральних чисел, що не перевищують N і не діляться на жодне з чисел 2,3,5.
