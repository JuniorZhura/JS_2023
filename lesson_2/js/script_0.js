let a = parseFloat(prompt('Введіть число а:'));
let b = parseFloat(prompt('Введіть число b:'));
let c = parseFloat(prompt('Введіть число c:'));
let S1 = a + 12 + b;
let S2 = Math.sqrt((a+b)/(2*a));
let S3 = Math.cbrt((a+b)*c);
let S4 = Math.sin(a/(-b));
document.write (
`S1 = ${S1.toFixed(2)}  <br>
S2 = ${S2.toFixed(2)}  <br>
S3 = ${S3.toFixed(2)}  <br>
S4 = ${S4.toFixed(5)}`
);
