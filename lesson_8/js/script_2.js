let pupilsNames = ['Ivan', 'Natalia', 'Serhyi', 'Ivan', 'Maria', 'Oleksandr', 'Oleg', 'Tetiana', 'Ivan', 'Neia'];

function getNumberOfIvans(names) {
  let sum = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Ivan') {
      sum++;
    };
  };
  return sum;
};
document.write(`Number of Ivans = ${getNumberOfIvans(pupilsNames)}`);

// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».