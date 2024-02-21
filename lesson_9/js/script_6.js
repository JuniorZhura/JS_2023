
function randomFillArr(minNum, maxNum, lengthArr) {
  let arr = [];
  for (let i = 0; i < lengthArr; i++) {
    let randNum = Math.floor(minNum + (Math.random() * (maxNum - minNum + 1)));
    arr.push(randNum);
  };
  return arr;
};

function getProductIfNumBiggerThanFirst(someArr) {
  let result = [someArr[0]];
  for (let i = 0; i < someArr.length; i++) {
    if (someArr[0] < someArr[i+1]) {
      result.push(someArr[i + 1] * 2);
    }
    else {
      result.push(someArr[i + 1]);
    }
  };
  return result;
};

let arr = randomFillArr(1, 9, 5);
let solution = getProductIfNumBiggerThanFirst(arr);

console.log(`${arr}<br>${solution}`);
document.write(`${arr}<br>${solution}`);

// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2.