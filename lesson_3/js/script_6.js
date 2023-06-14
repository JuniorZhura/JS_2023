let weekDay = parseInt(prompt('Вкажіть номер дня тижня:'));
let result;
switch (weekDay) {
      case 1: result = "Понеділок";
            break;
      case 2: result = "Вівторок";
            break;
      case 3: result = "Середа";
            break;
      case 4: result = "Четвер";
            break;
      case 5: result = "П'ятниця";
            break;
      case 6: result = "Субота";
            break;
      case 7: result = "Неділя";
            break;
}
alert(result);