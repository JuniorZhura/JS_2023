

const percent = 0.1;
let sum = 10;
let total = 10;
let nextDayLength;
let prevDayLength = 10;
let twenty = true;
let sixty = true;
let counterDays = 1;

do {
      counterDays++;
      nextDayLength = (prevDayLength * percent) + prevDayLength;
      sum += nextDayLength;

      if (nextDayLength >= 20 && twenty) {
            twenty = false;
            document.write(`Цього дня - ${counterDays} спортсмен пробіжить 20км <br>`);
      };

      if (sum > 60 && sixty) {
            sixty = false;
            document.write(`Ца стільки днів - ${counterDays} спортсмен подолає загальний шлях в 60км.<br>`)
      };

      if (counterDays === 7) {
            document.write(`Сумарний шлях пройдений за 7 днів ${sum}.<br>`);
      }
      prevDayLength = nextDayLength;
}
while (twenty || sixty || (counterDays < 7))





//  Розпочавши тренування, спортсмен першого дня пробіг 10 км. Щодня він збільшував денну норму на 10% від норми попереднього дня. Який сумарний шлях пробіжить спортсмен за 7 днів? Якого дня вперше спортсмен пробіжить понад 20 км? Якого дня вперше сумарний шлях перевищить 60 км?
