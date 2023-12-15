const minRangeNum = parseInt(prompt("Ввести початкове значення:"));
const maxRangeNum = parseInt(prompt("Ввести кінцеве значення:"));
let sum = 0;
for (let zone = minRangeNum; zone <= maxRangeNum; zone++) {
      if (zone % 2 !== 0) {
            sum += zone
      }
}
document.write(`<div>${sum}</div>`);








// Знайти суму всіх непарних чисел з діапазону, який вводить користувач з клавіатури. 