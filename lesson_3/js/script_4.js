let userAge = parseInt(prompt('Введіть вік людини:'));

if (userAge <= 2) {
      alert("Раннє дитинство");
}
else if (userAge <= 5) {
      alert("Дошкільний вік");
}
else if (userAge <= 17) {
      alert("Шкільний вік");
}
else if (userAge <= 21) {
      alert("Студентський вік");
}
else if (userAge <= 61) {
      alert("Зрілий вік");
}
else {
      alert("Пенсійний вік");
}

// let userAge = parseInt(prompt('Введіть вік людини:'));
// let nurseryAge = userAge <= 5;
// let schoolAge = userAge <= 17;
// let studentsAge = userAge <= 21;
// let workingAge = userAge <= 61;
// let pensionerAge = userAge >= 62;
// let result;

// switch (userAge) {
//       case 'A': result = "Раннє дитинство";
//             break;
//             case nurseryAge: result = "Дошкільний вік";
//             break;
//             case schoolAge: result = "Шкільний вік";
//             break;
//             case studentsAge: result = "Студентський вік";
//             break;
//             case workingAge: result = "Зрілий вік";
//             break;
//             case pensionerAge: result = "Пенсійний вік";
//             break;
// }
// alert(result);