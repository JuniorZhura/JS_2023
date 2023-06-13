let driverLicenseCategory = prompt('Вкажіть категорію водійського посвідчення (А, В, С):');
let result;
switch (driverLicenseCategory) {
      case 'A': result = "Мотоцикл";
            break;
            case 'B': result = "Легковий атомобіль";
            break;
            case 'C': result = "Вантажний автомобіль";
            break;
}
alert(result);