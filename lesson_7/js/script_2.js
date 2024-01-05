function sumOfNumbers(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
};
document.write(`<p>Сума чотирьох чисел (5, 5, 4, 5): ${sumOffNumbers(5, 5, 4, 5)}</p>`);

function productOfNumbers(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
};
document.write(`<p>Добуток чотирьох чисел (1, 2, 3, 4): ${productOffNumbers(1, 2, 3, 4)}</p>`);

function arithmeticMeanOfNumbers(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
};
document.write(`<p>Середнє арифметичне значення чисел (10, 15, 20, 25): ${arithmeticMeanOffNumbers(10, 15, 20, 25)}</p>`);

function minNumber(num1, num2, num3, num4) {
  let min;
  if (num1<num2) {
    min = num1;
  }
  if (num2<min) {
    min = num2;
  }
  if (num3<min) {
    min = num3;
  }
  if (num4<min) {
    min = num4;
  }
  return min;
};

document.write(`<p>Мінімальне значення серед даних чисел (5, 10, 15, 2): ${minNumber(5, 10, 15, 2)}</p>`);

// Створити окремі функції, які для 4 чисел знаходять:
//1)суму;
//2)добуток;
//3)середнє арифметичне.
//4)мінімальне значення.