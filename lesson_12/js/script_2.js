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

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function countShakeChanges(array) {
  let indexLeft = 0;
  let indexRight = array.length - 1;
  let counter = 0;
  while (indexLeft < indexRight) {
    for (let idx = indexLeft; idx < indexRight; idx++) {
      if (array[idx] > array[idx + 1]) {
        swap(array, idx, idx + 1);
        counter++;
      };
    };
    indexRight--;
    for(let idx = indexRight; idx > indexLeft; idx--) {
      if (array[idx] < array[idx - 1]) {
        swap(array, idx, idx - 1);
      };
    };
    indexLeft++;
  };
return counter;
};
let result = countShakeChanges(randArr);


console.log(result);

// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.