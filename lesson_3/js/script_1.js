let firstChildName = prompt('Введіть ім`я дитини:');
let firstChildSugarNumber = parseInt(prompt(`Введіть кількість цукерок ${firstChildName}:`));
let secondChildName = prompt('Введіть ім`я дитини:');
let secondChildSugarNumber = parseInt(prompt(`Введіть кількість цукерок ${secondChildName}:`));

if (firstChildSugarNumber > secondChildSugarNumber) {
      alert (`${firstChildName} має більше цукерок ніж ${secondChildName}.`)
}
else if (firstChildSugarNumber < secondChildSugarNumber){
      alert (`${secondChildName} має більше цукерок ніж ${firstChildName}.`)
}
else {
      alert(`${firstChildSugarNumber} та ${secondChildSugarNumber} мають однакову кількість цукерок.`)
}