let sumTemperature = 0;
let averageTemperature = 0;

for (let month = 1; month <= 12; month++) {
      let temperature = parseFloat(prompt(`Введіть показники температури за ${month} місяць:`));
      sumTemperature = sumTemperature + temperature;
      averageTemperature = sumTemperature / month;
}
alert(`Середня температура за рік становить ${averageTemperature} ℃ `);


// Користувача поступово вводить показники температури протягом року. Знайти середню температуру.°
// str.charCodeAt(U+2103)