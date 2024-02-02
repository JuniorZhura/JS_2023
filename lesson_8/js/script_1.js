let allPoints = [3, 5, 4, 5, 3, 3, 4, 3];

function getAveragePoints(points) {
  let sumPoints = 0;
  for (let i = 0; i < points.length; i++) {
    sumPoints += points[i];
  };
  return (sumPoints / points.length);
};

function getStudentRating(points) {
  let minRating = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i] < minRating) minRating = points[i];
  }
  let studentRating;
  if (minRating <= 2) studentRating = 'двоїшник'
  if (minRating === 3) studentRating = 'троєшник'
  else studentRating = 'хорошист';

  return studentRating;
};



document.write(
  `Всі оцінки студента = ${allPoints}<br>
  Середній бал студента = ${getAveragePoints(allPoints)}<br>
  Ретинг студента = ${getStudentRating(allPoints)}`
);

// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двоїшник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
