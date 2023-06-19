let totalSum = parseFloat(prompt("Касир має ввести суму до сплати:"));

while (totalSum > 0) {
      let customerMoney = parseFloat(prompt("Введіть суму внеску:"));
      if (customerMoney <= totalSum) {
            alert(`Дякуємо! Внесок зараховано. Залишок до сплати: ${totalSum - customerMoney}грн.`)
            totalSum -= customerMoney
      }
      else {
            alert(`Дякуємо! Внесеної суми достатньо для сплати рахунку. Ваша решта: ${customerMoney - totalSum}грн.`)
            totalSum -= customerMoney
      };
};
alert("Рахунок сплачено.");






// Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 