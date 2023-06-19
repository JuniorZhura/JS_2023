document.write('<div>');
document.write('<table>');
for (let i = 0; i < 3; i++) {
  document.write('<tr>')
  for (let ii = 1; ii <= 7; ii++) {
    document.write(`<td>${ii}</td>`)
  };
  document.write('</tr>')
};
document.write('</table>');
document.write('</div>');
// Вивести таблицю з 3 рядків і 7 стовпців