let productsPrices = [100, 20, 31];
let productsNames = ['cheese', 'juice', 'bread'];
let userMoney = parseFloat(prompt('How much money you have'));

function affordableProducts(prices, products, money) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    if (money >= prices[i]) {
      result.push(products[i]);
    };
  };
  return result;
};

let result = affordableProducts(productsPrices, productsNames, userMoney)
document.write(`Your money is enough to buy ${result}`);



// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).