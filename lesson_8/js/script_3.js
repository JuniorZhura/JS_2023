let studentPoints = [2, 5, 4, 3, 5, 2, 5, 4, 4, 3, 5];

function getWorstPoints(points) {
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] === 2) {
      sum ++;
    };
  };
  return sum;
};

function getBestPoints(points) {
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] >= 4) {
      sum ++;
    };
  };
  return sum;
};

function getAveragePoints(points) {
  let averagePoints = 0;
  for (let i = 0; i < points.length; i++) {
    averagePoints += points[i];
  };
  averagePoints = averagePoints / points.length;
  return averagePoints;
};

function getPointsBelowAverage(points) {
  let pointsBelowAverage = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] < getAveragePoints(studentPoints)) {
      pointsBelowAverage++;
    };
  };
  return pointsBelowAverage;
}

document.write(
  `Кількість двійок = ${getWorstPoints(studentPoints)}<br>
  Кількість хороших оцінок = ${getBestPoints(studentPoints)}<br>
  Кількість середній бал = ${getAveragePoints(studentPoints)}<br>
  Кількість оцінок нижчих за середній бал= ${getPointsBelowAverage(studentPoints)}`
);

// Дано послідовність оцінок учня. Підрахувати кількість:
// 1.	двійок;
// 2.	кількість хороших оцінок (добре, відмінно);
// 3.	кількість оцінок, які нижче середнього.
