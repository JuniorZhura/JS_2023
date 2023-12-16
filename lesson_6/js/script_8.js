let number = parseInt(prompt("Введіть кількість учнів"));
let sum = 0;
for (let count = 0; count < number; count++) {
      let height = parseInt(prompt("Введіть зріст учня"));
      sum += height;
}
const average = sum / number;
document.write(average)
// У комп’ютер вводяться по черзі дані про зріст N учнів класу. Визначити середній зріст учнів класу.