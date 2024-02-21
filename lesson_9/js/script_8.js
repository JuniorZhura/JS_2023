let carNumbers = ['AI3639BX', 'CE6595AA', 'AI4684PH', 'BT1116AP', 'AA9999TA', 'HOTPEPRS', '1A23000', '7K11974', '4S64641', 'EBG542'];

function getNumbersStartsWithA(numbers) {
  let arrA = [];
  for (const element of numbers) {
    if (element[0] === 'A') {
      arrA.push(element);
    }
  }
  return arrA;
}
let solution = getNumbersStartsWithA(carNumbers);

console.log(`${solution}`);
document.write(`${solution}`);

// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»