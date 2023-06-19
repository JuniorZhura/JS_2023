let userNumber = parseInt(prompt('Введіть довільне число від 1 до 100:'));

document.write('<ul>');
for (let i = 1; i <= userNumber; i++) {
      let resultRandomNumber = 1 + Math.floor(Math.random() * 100);
      document.write(`<li> ${resultRandomNumber} </li>`)
};
document.write('</ul>');

// Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.


// let userNumber = parseInt(prompt('Введіть довільне число від 1 до 100:'));

// const minRandomNumber = 1;
// const maxRandomNumber = 100;

// document.write('<ul>')
// for (let i = 1; i <= userNumber; i++) {
//       let resultRandomNumber = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1)) + minRandomNumber;
//       document.write(`<li> ${resultRandomNumber} </li>`)
// }
// document.write('</ul>')