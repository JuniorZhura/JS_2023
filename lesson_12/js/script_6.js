let arrOfNames = ['Oleksandr', 'Kateryna', 'Olena', 'Mykola', 'Stas', 'Ganna', 'Olga', 'Petro', 'Dmytro', 'Tetiana'];
let modifyArr = arrOfNames.sort();

console.log(`Відсортований масив ${modifyArr}`);

  function indexEl(arr, searchLength) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
      while (startIndex <= endIndex) {
          const middleIndex = Math.floor((endIndex + startIndex) / 2);
          if (arr[middleIndex].length === searchLength) return middleIndex;
        if (arr[middleIndex].length < searchLength) startIndex = middleIndex + 1;
        if (arr[middleIndex].length > searchLength) endIndex = middleIndex - 1;
      }
      return -1;
  }
  let res = indexEl(modifyArr, 5);
if (indexEl !== -1)
  console.log(`В масиві є ім'я з 5 літер під індексом ${res}`);
else console.log('В масиві нема такого імені');


// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
