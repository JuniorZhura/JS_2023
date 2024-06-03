let arrOfNames = ['Oleksandr', 'Kateryna', 'Olena', 'Mykola', 'Stas', 'Ganna', 'Olga', 'Petro', 'Dmytro', 'Tetiana'];
let searchEl = 'Olga';
let modifyArr = arrOfNames.sort();

console.log('Відсортований масив');
console.log(modifyArr);

  function includeIndexEl(arr, searchElement) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
      while (startIndex <= endIndex) {
          const middleIndex = Math.floor((endIndex + startIndex) / 2);
          if (arr[middleIndex] === searchElement) return middleIndex;
        if (arr[middleIndex] < searchElement) startIndex = middleIndex + 1;
        if (arr[middleIndex] > searchElement) endIndex = middleIndex - 1;
      }
      return -1;
  }
  let searchIndexEl = includeIndexEl(modifyArr, searchEl);
if (searchIndexEl !== -1)
  console.log(`В масиві є ім'я ${searchEl} з індексом ${searchIndexEl}`);
else console.log('В масиві нема такого імені');

// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом