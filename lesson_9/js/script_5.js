let arr = new Array(4, 5, 4, 5, 4);
let product = 1;

for (let item of arr) {
  if (item > 0) {
    product *= item;
  };
};

console.log(product);
document.write(product);

// Дано масив елементів. Знайти добуток додатних елементів