let pricesListArr = [100, 1000, 2000, 50, 80, 200, 1000, 2000];

function getTax(array) {
  let taxArr = [];
  for (let i = 0; i < array.length; i++) {
    let taxValue = (pricesListArr[i] * 20) / 100;
    taxArr.push(taxValue);
  };
  return taxArr;
};

let solution = getTax(pricesListArr);

console.log(`20% податку від кожної ціни ${solution}`);
document.write(`20% податку від кожної ціни ${solution}`);


// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.