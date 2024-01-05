
function negativeTemperatureCount(temperature) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    if (temperature[i] < 0) {
      count++;
    };
  };
  return count;
};

let temperatures = [10, 15, -20, 10, -10, 5, -2, -3];

alert(`${negativeTemperatureCount(temperatures)}`);


// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.