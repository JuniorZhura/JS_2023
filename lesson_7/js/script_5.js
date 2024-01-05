function arithmeticMeanPositiveTemperature(temperature) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    if (temperature[i] > 0) {
      count++;
      sum += temperature[i];
    };
  };
  return sum / count;
};

let temperatures = [10, 15, -20, 10, -10, 5, -2, -3];

alert(`${arithmeticMeanPositiveTemperature(temperatures)}`);

// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.