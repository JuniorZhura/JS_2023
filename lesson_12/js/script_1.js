function generateRandomNum(minValue, maxValue)  {
  return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
};
function generateRandomArray(arrayLength, minValue, maxValue) {
  const arr = [];
  for (let i = 0; i < arrayLength; i++) {
    let randNum = generateRandomNum(minValue, maxValue);
    arr.push(randNum);
  }
  return arr;
};

let randArr = generateRandomArray(30, 1, 100);
console.log(randArr);

function countChanges(randArr) {
  let counter = 0;
  let changed;
  do {
    changed = false;
  for (let i = 0; i < randArr.length; i++) {
    if (randArr[i - 1] > randArr[i]) {
      let tmp = randArr[i - 1];
      randArr[i - 1] = randArr[i];
      randArr[i] = tmp;
      changed = true;
      counter++;
    }
  }
}
  while (changed);
  return counter;
}

console.log(`Кількість змін при сортуванні ${countChanges(randArr)}`);

// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою.