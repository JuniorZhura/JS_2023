const minRandomNumber = 1;
const maxRandomNumber = 5;
let resultNumber = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1)) + minRandomNumber;


alert ('Спробуйте вгадати яке число від 1 до 5 я загадав. У Вас є дві спроби.');
let userNumber = parseInt(prompt('Перша спроба. Введіть число від 1 до 5:'));

if (userNumber === resultNumber) {
      alert (`Поздоровляю! Ви вгадали! Я дійсно загадав ${resultNumber}.`);
}
else {
      (userNumber = parseInt(prompt('На жаль, Ви не вгадали. Друга спроба. Введіть число від 1 до 5:'))) 
      if (userNumber === resultNumber) {
            alert (`Поздоровляю! Ви вгадали! Я дійсно загадав ${resultNumber}.`);
      }
      else {
            alert (`На жаль, Ви не вгадали. Я загадував ${resultNumber}.`)
      }
}