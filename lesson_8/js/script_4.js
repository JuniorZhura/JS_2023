let customersDuringTheWeek = [10, 15, 27, 9, 12, 38, 17];

function getMinCustomersDay(customers) {
  let minNum = customers[0];
  let numDay;
  for (let i = 1; i < customers.length; i++) {
    if (customers[i] < minNum) {
      minNum = customers[i];
      numDay = i + 1;
    };
  };
  return numDay;
};

function getMaxCustomersDay(customers) {
  let maxNum = customers[0];
  let numDay;
  for (let i = 1; i < customers.length; i++) {
    if (customers[i] > maxNum) {
      maxNum = customers[i];
      numDay = i + 1;
    };
  };
  return numDay;
};

function getCustomersDayLessThanTwenty(customers) {
  let result = [];
  for (let i = 1; i < customers.length; i++) {
    if (customers[i] < 20) {
      result.push(i + 1);
    };
  };
  return result;
};

function getCustomersDuringWorkDays(customers) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += customers[i];
  };
  return sum;
};

function getCustomersDuringOffDays(customers) {
  let sum = 0;
  for (let i = 5; i < customers.length; i++) {
    sum += customers[i];
  };
  return sum;
};

document.write(
  `Day with minimum customers = ${getMinCustomersDay(customersDuringTheWeek)}<br>
  Day with minimum customers = ${getMaxCustomersDay(customersDuringTheWeek)}<br>
  Day with less than 20 customers = ${getCustomersDayLessThanTwenty(customersDuringTheWeek)}<br>
  Number of customers during workdays = ${getCustomersDuringWorkDays(customersDuringTheWeek)}<br>
  Number of customers during days off = ${getCustomersDuringOffDays(customersDuringTheWeek)}`
);

// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// 1) номери днів, коли кількість відвідувачів була мінімальною;
// 2) номери днів, коли кількість відвідувачів була максимальною;
// 3) номери днів, протягом яких кількість відвідувачів була меншою за 20;
// 4) загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.