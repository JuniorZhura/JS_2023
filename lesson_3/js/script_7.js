let monthNumber = parseInt(prompt('Вкажіть номер місяця:'));

if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
      alert("Зима");
}
else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
      alert("Весна");
}
else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
      alert("Літо");
}
else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
      alert("Осінь");
}
else {
      alert("Не існує місяця за таким номером. Спробуйте ввести номер від 1 до 12.");
}

// ______________Другий варіант рішення. Який краще? Чи який правильніше?___________

// let monthNumber = parseInt(prompt('Вкажіть номер місяця:'));
// let result;

// switch (monthNumber) {
//       case 1:
//       case 2:
//       case 12: result = "Зима";
//             break;
//       case 3:
//       case 4:
//       case 5: result = "Весна";
//             break;
//       case 6:
//       case 7:
//       case 8: result = "Літо";
//             break;
//       case 9:
//       case 10:
//       case 11: result = "Осінь";
//             break;
//       default: result = "Не існує місяця за таким номером. Спробуйте ввести номер від 1 до 12."
// }
// alert(result);