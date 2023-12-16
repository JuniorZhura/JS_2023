const number = parseInt(prompt("Введіть натуральне число"));
let counter = 0;
for (let i = 1; i <= number; i++) {
      if (i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            counter++;
      }
}
document.write(counter);
// Користувачем задано натуральне число N. Знайти кількість натуральних чисел, що не перевищують N і не діляться на жодне з чисел 3,5,7.
