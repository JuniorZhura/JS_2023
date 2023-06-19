let sequenceNumber = 0;

document.write('<div>')

for (let i = 0; i < 3; i++) {
      document.write('<table>')
      for (let j = 0; j < 3; j++) {
            document.write('<tr>')
            for (let k = 1; k <= 3; k++) {
              sequenceNumber++
                  document.write(`<td>${sequenceNumber}</td>`)
            }
      document.write('</tr>')
      }
document.write('</table>')
}

document.write('</div>')

// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком.


