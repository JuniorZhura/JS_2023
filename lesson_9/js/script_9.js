let namesArr = ['Maia', 'Peter', 'Kate', 'Maria', 'Zanna', 'Talia', 'Josh', 'Eric'];

function getFirstLettersFromNames(names) {
  let arrFistLetters = [];
  for (const element of names) {
    arrFistLetters.push(element[0]);
  }
  return arrFistLetters;
}
let solution = getFirstLettersFromNames(namesArr);
  
console.log(`${solution}<br>first letter from ech name <br>${namesArr}`);
document.write(`${solution}<br>first letter from ech name <br>${namesArr}`);





// let usersName = ['Іван', 'Петро', 'Катерина', 'Марія', 'Ксенія', 'Іван', 'Богдан', 'Катерина', 'Максим', 'Іван'];

// function getArrayFromNameFirstLetter(names) {
//   let arrayFromNameFirstLetter = [];
//   for (const name of names) {
//     arrayFromNameFirstLetter.push(name[0])
//   }
//   return arrayFromNameFirstLetter
// }
// document.write(`<p>${getArrayFromNameFirstLetter(usersName)}</p>`)



// const names = ["Павло", "Едуард", "Руслан", "Елла", "Максим", "Олег", "Галина", "Анна"];
// function getFirstLetters(names) {
//   let firstLettersElements = [];
//   for (const elem of names) {
//     firstLettersElements.push(elem[0]);
//   }
//   return firstLettersElements;
// }
// let firstLetters = getFirstLetters(names);
// document.write(firstLetters);




















// Дано масив імен. Сформувати масив з перших літер цих імен.