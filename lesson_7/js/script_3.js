function convertFromCmtoInches(cm) {
  return cm / 2.54;
};

let resultOfConvertFromCmtoInches = convertFromCmtoInches(40);
document.write(`<p>Конвертація cm в inch: ${resultOfConvertFromCmtoInches.toFixed(4)}</p>`);

function convertFromKgToPounds(kg) {
  return kg / 0,45359237;
};

let resultOfConvertFromKgToPounds = convertFromKgToPounds(2);
document.write(`<p>Конвертація kg в pound: ${resultOfConvertFromKgToPounds.toFixed(4)}</p>`);

function convertFromKmToMiles(km) {
  return km * 0.621371192;
};

document.write(`<p>Конвертація km в miles: ${convertFromKmToMiles(5).toFixed(4)}</p>`);

// Створити окремі функції, які переводять:
// 1. Сантиметри у дюйми;
// 2. Кілограми у фунти;
// 3. Кілометри у милі.

