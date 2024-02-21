let numberOfElements = parseInt(prompt(`введіть кількість елементів`));

let customerArray = new Array(numberOfElements).fill(1, 0, 5).fill(7,5);

console.log(customerArray);
document.write(customerArray);
// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.