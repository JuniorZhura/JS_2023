let minMonth = 1;
let maxMonth = 12;
let minDay = 0;
let maxDay = 6;
let randomMonth = minMonth + Math.floor(Math.random() * (maxMonth-minMonth + 1));
let randomDay = minDay + Math.floor(Math.random() * (maxDay-minDay + 1));
let sum = randomDay + randomMonth;
document.write(
      `Випадковий місяць: ${randomMonth} <br> Випадковий день: ${randomDay} <br> Сума отриманих чисел: ${sum}`
);