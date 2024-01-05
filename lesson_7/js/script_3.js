function convertIntoCm(cm) {
  return cm / 2.54;
};

let resultOfConvertToInches = convertIntoCm(40);
document.write(`<p>Конвертація cm в inch: ${resultOfConvertToInches.toFixed(4)}</p>`);

function convertIntoPounds(kg) {
  return kg / 0,45359237;
};

let resultOfConvertToPounds = convertIntoPounds(2);
document.write(`<p>Конвертація kg в pound: ${resultOfConvertToPounds.toFixed(4)}</p>`);

function convertIntoMiles(km) {
  return km * 0.621371192;
};

document.write(`<p>Конвертація km в miles: ${convertIntoMiles(5).toFixed(4)}</p>`);

// Створити окремі функції, які переводять:
// 1. Сантиметри у дюйми;
// 2. Кілограми у фунти;
// 3. Кілометри у милі.

