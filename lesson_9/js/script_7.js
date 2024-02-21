let pricesListArr = [100, 1010, 2000, 50, 80, 20, 1010, 2000];


pricesListArr.forEach((price, index, arr) => {
  if (price > 1000) {
    arr[index] = price - (price * 30) / 100;
  }
});

console.log(`ціни зі знижками ${pricesListArr}`);
document.write(`ціни зі знижками ${pricesListArr}`);

// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.