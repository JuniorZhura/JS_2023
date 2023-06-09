let customerLength = parseInt(prompt('Введіть довжину в СМ:'));
const meter = 100;
const kilometer = 1000;
let resultInMeter = customerLength / meter;
let resultInKilometer = customerLength / kilometer;
document.write (`Довжина в метрах: ${resultInMeter} <br> Довжина в кілометрах: ${resultInKilometer}`);
