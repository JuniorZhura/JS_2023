function getDay(day) {
  switch (day) {
    case 1:
    case 2: 
    case 3: 
    case 4: 
    case 5: return 'working day';
    case 6: 
    case 7: return 'day off';
  };
};

let userDayNumber = parseInt(prompt('Введіть номер дня тижня:'));
alert(getDay(userDayNumber));

// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
