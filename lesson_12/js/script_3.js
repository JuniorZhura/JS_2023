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

function countInsertSort(arr) {
  let counter = 0;
  for (let k = 1; k < arr.length; k++) {
    let currentElement = arr[k];
    let i = k - 1;
    while ( i >= 0 && arr[i] > currentElement) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = currentElement;
    counter++;
  }
  return counter;
};
let result = countInsertSort(randArr);

console.log(result);

// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.