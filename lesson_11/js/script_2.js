let numOfShops = parseInt(prompt("Введіть кількість магазинів:"));
let minIncome = 100;
let maxIncome = 1000;
let week = 7;

function randomNumber(minValue, maxValue) {
  return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
}

function getWeekIncome(arrayLength, minValue, maxValue) {
  const arr = [];
  for (let i = 0; i < arrayLength; i++) {
    let randValue = randomNumber(minValue, maxValue);
    arr.push(randValue);
  }
  return arr;
}

function generateIncomesTable(rowsNum, columnsNum, minValue, maxValue) {
  let table = [];
  for (let i = 0; i < rowsNum; i++) {
    let randRow = getWeekIncome(columnsNum, minValue, maxValue);
    table.push(randRow);
  }
  return table;
}

let allShopsIncomeTable = generateIncomesTable(numOfShops, week, minIncome, maxIncome);

console.log(allShopsIncomeTable);

// ========================================================================== 1
function totalIncomeEachShop(array) {
  let sumArr = [];
  for (let i = 0; i < array.length; i++) {
    let sumForShop = 0;
    for (let j = 0; j < array[i].length; j++) {
      sumForShop += array[i][j];
    }
    sumArr.push(sumForShop);
  }
  return sumArr;
}
let eachShopIncomeSum = totalIncomeEachShop(allShopsIncomeTable);
console.log("Прибуток кожного магазину за тиждень");
console.log(eachShopIncomeSum);

// ========================================================================== 2
function getIncomeByDays(array) {
  let arr = [];
  for (let i = 0; i < week; i++) {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j][i];
    }
    arr.push(sum);
  }
  return arr;
}

let result = getIncomeByDays(allShopsIncomeTable);

console.log("Прибуток по дням тижня");
console.log(result);

// ========================================================================== 3
let sumByWorkingDays = 0;
let workingDaysNum = 5;

for (let i = 0; i < allShopsIncomeTable.length; i++) {
  for (let j = 0; j < workingDaysNum; j++) {
    sumByWorkingDays += allShopsIncomeTable[i][j];
  }
}
console.log(`Загальний прибуток за робочі дні ${sumByWorkingDays}`);
// function getIncomeByWorkingDays(array, workDays) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < workDays; j++) {
//       sum += array[i][j];
//     }
//   }
//   return sum;
// }

// let workingDaysNum = 5;
// let workingDaysIncome = getIncomeByWorkingDays(allShopsIncomeTable, workingDaysNum);

// console.log(`Загальний прибуток за робочі дні ${workingDaysIncome}`);

// ========================================================================== 4
let sumByWeekend = 0;
for (let i = 0; i < allShopsIncomeTable.length; i++) {
  for (let j = 5; j < 7; j++) {
    sumByWeekend += allShopsIncomeTable[i][j];
  }
}
console.log(`Загальний прибуток за вихідні ${sumByWeekend}`);
// function getIncomeByWeekend(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 5; j < 7; j++) {
//       sum += array[i][j];
//     }
//   }
//   return sum;
// }
// let weekendIncome = getIncomeByWeekend(allShopsIncomeTable);
// console.log(`Загальний прибуток за вихідні ${weekendIncome}`);

// ========================================================================== 5
let generalIncomeList = allShopsIncomeTable.flat().filter((item) => item > 200);

console.log("Прибутки що більші за 200");
console.log(generalIncomeList);

// ========================================================================== 6
let newTable = JSON.parse(JSON.stringify(allShopsIncomeTable));
let resultRising = [];
for (let i = 0; i < newTable.length; i++) {
  newTable[i].sort((item1, item2) => item1 - item2);
  resultRising.push(newTable[i]);
}

console.log(`Відсортувати кожен тиждень(масив) за зростанням`);
console.log(resultRising);

// let newTable = JSON.parse(JSON.stringify(allShopsIncomeTable));

// function sortEachIncomeWeekByRising(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     array[i].sort((item1, item2) => item1 - item2);
//     newArr.push(array[i]);
//   }
//   return newArr;
// }

// let resultRising = sortEachIncomeWeekByRising(newTable);

// console.log(`Відсортувати кожен тиждень(масив) за зростанням`);
// console.log(resultRising);

// ========================================================================== 7
let risingIncomes = [...eachShopIncomeSum];

for (let i = 0; i < risingIncomes.length; i++) {
  risingIncomes.sort((item1, item2) => item1 - item2);
}

console.log('Сумарний прибуток кожного магазину за зростанням');
console.log(risingIncomes);

// ========================================================================== 7
let descendingIncomes = [...eachShopIncomeSum];

for (let i = 0; i < descendingIncomes.length; i++) {
  descendingIncomes.sort((item1, item2) => item2 - item1);
}

console.log('Сумарний прибуток кожного магазину за спаданням');
console.log(descendingIncomes);

