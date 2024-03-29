// створюємо двовимірний масив
function getRandomNumber(minValue, maxValue) {
  return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
};

function generateRandomArray(arrayLength, minValue, maxValue) {
  const arr = [];
  for (let i = 0; i < arrayLength; i++) {
    let randNum = getRandomNumber(minValue, maxValue);
    arr.push(randNum);
  }
  return arr;
};

function generateRandomTable(rowsNum, columnsNum, minValue, maxValue) {
  const table = [];
  for (let i = 0; i < rowsNum; i++) {
    let randRow = generateRandomArray(columnsNum, minValue, maxValue)
    table.push(randRow);
  }
  return table;
};

let rowsNum = 4;
let columnsNum = 4;
let minValue = 1;
let maxValue = 10;

let myNewTable = generateRandomTable(rowsNum, columnsNum, minValue, maxValue);

console.log(myNewTable);

// Знайти суми елементів у вказаній області (масиви розділені на 4 рівні частини)
// 1
let sumFirst = 0;
for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
  for (let columnIndex = 0; columnIndex < 2; columnIndex++) 
  sumFirst += myNewTable[rowIndex][columnIndex];
};

console.log(sumFirst);

// 2
let sumSecond = 0;
for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
  for (let columnIndex = 2; columnIndex < 4; columnIndex++) 
  sumSecond += myNewTable[rowIndex][columnIndex];
};

console.log(sumSecond);

// 3
let sumThird = 0;
for (let rowIndex = 2; rowIndex < 4; rowIndex++) {
  for (let columnIndex = 0; columnIndex < 2; columnIndex++) 
  sumThird += myNewTable[rowIndex][columnIndex];
};

console.log(sumThird);

// 4
let sumFourth = 0;
for (let rowIndex = 2; rowIndex < 4; rowIndex++) {
  for (let columnIndex = 2; columnIndex < 4; columnIndex++) 
  sumFourth += myNewTable[rowIndex][columnIndex];
};

console.log(sumFourth);

// 5
let sumEvenRows = 0;
				for (let rowsNum = 0; rowsNum < myNewTable.length; rowsNum += 2) {
					for (let columnsNum = 0; columnsNum < myNewTable[rowsNum].length; columnsNum++) {
            sumEvenRows += myNewTable[rowsNum][columnsNum];
					}
};
console.log(`Сума парних рядків = ${sumEvenRows}`);

// 6
let sumOddRows = 0;
				for (let rowsNum = 1; rowsNum < myNewTable.length; rowsNum += 2) {
					for (let columnsNum = 0; columnsNum < myNewTable[rowsNum].length; columnsNum++) {
            sumOddRows += myNewTable[rowsNum][columnsNum];
					}
};

console.log(`Сума непарних рядків = ${sumOddRows}`);

// 7
let sumEvenRowsOddColumns = 0;
				for (let rowsNum = 0; rowsNum < myNewTable.length; rowsNum += 2) {
					for (let columnsNum = 1; columnsNum < myNewTable[rowsNum].length; columnsNum += 2) {
            sumEvenRowsOddColumns += myNewTable[rowsNum][columnsNum];
					}
};
console.log(`Сума парних рядків непарних стовпців = ${sumEvenRowsOddColumns}`);

let sumOddRowsEvenColumns = 0;
				for (let rowsNum = 1; rowsNum < myNewTable.length; rowsNum += 2) {
					for (let columnsNum = 0; columnsNum < myNewTable[rowsNum].length; columnsNum += 2) {
            sumOddRowsEvenColumns += myNewTable[rowsNum][columnsNum];
					}
};
console.log(`Сума непарних рядків парних стовпців = ${sumOddRowsEvenColumns}`);
