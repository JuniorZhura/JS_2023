
let numberOfElements = parseInt(prompt(`введіть кількість елементів`));
let customerArray = new Array(numberOfElements);

customerArray.fill(1, 0, numberOfElements / 2).fill(7, numberOfElements / 2);

console.log(customerArray);
document.write(customerArray);


//  Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.