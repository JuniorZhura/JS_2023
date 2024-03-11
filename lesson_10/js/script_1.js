// формування масиву
let array = [];
let arrayQuantity = 10;
let minEl = 1;
let maxEl = 10000;

for (let i = 0; i < arrayQuantity; i++) {
    let randomEl = minEl + Math.floor(Math.random() * (maxEl - minEl + 1));
    array.push(randomEl);
};

console.log(`Генерація рандомного масиву ${array} <br><br>`);

// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let arrayMoreThan1000 = array.filter((value) => value > 1000);

console.log(`масив, у якому є тільки ті, що більші за 1000 грн ${arrayMoreThan1000} <br><br>`);

// 2)Сформувати новий масив, у якому є індекси тільки тих, що більші за 1000 грн.
function indexValueMoreThan1000 (arrObj, value, index) {
  if (value > 1000) {
    arrObj.push(index);
  }
  return arrObj;
};

console.log(`масив, у якому є тільки ті,  у якому є номери тільки тих, що більші за 1000 грн. ${array.reduce(indexValueMoreThan1000, [])} <br><br>`);

//  3)Сформувати список з тих цін, які більші за попереднє значення
function valueNextHigherThanPrev (value, index, baseArr) {
  if (value > baseArr[index - 1] && (index > 0))
    return value;
};

console.log(`сформувано список з тих цін, які більші за попереднє значення ${array.filter(valueNextHigherThanPrev)} <br><br>`);

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
let maxValue = Math.max(...array);
let valuePercentageOfTheMax = array.map((value) => value * 100 / maxValue)
let result = valuePercentageOfTheMax.map((value) => value.toFixed(2))

console.log(`Значення ціни у відсотках відносно максимальної ціни = ${result}`)

// 5. Підрахувати кількість змін цін
let numberChangedPrices = array.reduce(function (prevCount, el, index, baseArr) {
    if (el !== baseArr[index+1] && index < (baseArr.length - 1)) {
      prevCount++
  }
  return prevCount;
  },
  0);

  console.log(`Кількість змін цін ${numberChangedPrices}`);

// 6. Визначити, чи є ціна, що менше 1000
function valueLessThan1000(valueArray) {
  let resArray = [];
  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] < 1000)
      resArray.push(valueArray[i]);
  }
  return resArray;
}

let res = valueLessThan1000(array);
if (res.length === 0) {
  console.log('Немає ціни нижчої за 1000');
}
else {
  console.log(`Є ціна, що менше 1000 = ${res}`);
}

// 7. Визначати, чи усі ціни більше за 1000

let allMoreThan1000 = array.every(function(elem) {
	if (elem > 1000) {
		return true;
	} else {
		return false;
	}
});

console.log(allMoreThan1000);

// 8. Підрахувати кількість цін, що більше за 100
let quantityOfValuesMoreThan1000 = array.reduce(function(sum, elem) {
  if (elem > 1000) {
    sum++
  }
  return sum;
}, 0);

console.log(quantityOfValuesMoreThan1000);

// 9. Підрахувати суму цін, що більше за 1000
let sumOfValuesMoreThan1000 = array.reduce(function(sum, elem) {
	if (elem > 1000) {
		return sum + elem;
  } else {
		return sum;
	}
}, 0);

console.log(sumOfValuesMoreThan1000);

// 10. Знайти першу ціну, що більше за 1000
let firstValueMoreThan1000= array.find(function(elem) {
	return elem > 1000;
});

console.log(firstValueMoreThan1000);

// 11. Знайти індекс першої ціни, що більше за 1000
let indexFirstValueMoreThan1000 = array.findIndex(function (elem){
  return elem > 1000;
});

console.log(indexFirstValueMoreThan1000);

// 12. Знайти останню ціну, що більше за 1000
let lastValueMoreThan1000 = array.findLast(function(elem) {
	return elem > 1000;
});

console.log(lastValueMoreThan1000);


// 13. Знайти індекс останньої ціни, що більше за 1000
let indexLastValueMoreThan1000 = array.findLastIndex(function(elem) {
	return elem > 1000;
});

console.log(indexLastValueMoreThan1000);