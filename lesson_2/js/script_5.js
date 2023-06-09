let seconds = parseInt(prompt('Введіть кількість секунд:'));
const minute = 60;
const hour = minute * 60;
let resultInMinutes = seconds / minute;
let resultInHours = seconds / hour;
document.write (`Кількість хвилин: ${resultInMinutes.toFixed(2)}хв. <br> Кількість годин: ${resultInHours.toFixed(2)}год.`);