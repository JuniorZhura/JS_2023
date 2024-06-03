console.log('Сортування бульбашкой:');
let arr = [8, 2, 10, 4, 15];
let changed;

do{
	changed = false;
	for (let index = 1; index < arr.length; index++) {
		if(arr[index - 1] > arr[index]){
      let temp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = temp;
      changed = true;
			console.log(arr);
		}
	}
}
while (changed);
//========================================================================================================================================================

console.log('Змішане сортування:');
let array = [8, 2, 10, 4, 15];
let leftIndex = 0;
let rightIndex = array.length - 1;

function swap(array, i, j) { 
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

while(leftIndex < rightIndex){
for (let ind = leftIndex; ind < rightIndex; ind++) {
  if (arr[ind] > array[ind + 1]) { swap(array, ind, ind + 1) }
  console.log(array);
}
  rightIndex--;
for (let ind = rightIndex; ind > leftIndex; ind--) {
  if (array[ind] < array[ind - 1]) { swap(array, ind, ind - 1) }
  console.log(array);
	}
  leftIndex++;
};
//========================================================================================================================================================

console.log('Сортування включенням:');
let a = [8, 2, 10, 4, 15];
console.log(a);

function getIncludeSortArr(a) {
	let i;
	for (let k = 1; k < a.length; k++) {
    let currentEl = a[k];
		i = k - 1;
		while(i >= 0 && a[i] >  currentEl){
			a[i + 1] = a[i];
			i = i - 1;
		}
		a[i + 1] = currentEl;
		console.log(`Вставка ${a}`);
	}
  return a;
};

console.log(`${getIncludeSortArr(a)}`);
//========================================================================================================================================================

console.log('Сортування вибором:');
let arrA = [-9, 21, 10, -2, 35];

let prevLastIndex2 = arrA.length - 2;
for (let i = 0; i <= prevLastIndex2; i++) {
  for (let j = i +1; j < arrA.length; j++) {
    if(arrA[i] > arrA[j]){
      let temp = arrA[i];
      arrA[i] = arrA[j];
      arrA[j] = temp;
    }
    console.log(`Перестановка ${arrA}`);
  }
};
//========================================================================================================================================================

console.log('Сортування вибором c находженням минимального:');
let arrB = [7, 12, -11, 55, -9];
let prevLastIndex3 = arrB.length - 2;

for (let i = 0; i <= prevLastIndex3; i++) {
  let minIndex = i;
  for (let j = i +1; j < arrB.length; j++) {
    if(arrB[j] < arrB[minIndex]){
      minIndex = j;
    };
  };
	if (i !== minIndex) {
		let temp = arrB[i];
		arrB[i] = arrB[minIndex];
		arrB[minIndex] = temp;
	  console.log(`Перестановка * ${arrB}`);
  };
};
//========================================================================================================================================================

console.log('Швидке сортування:');
let arrS = [8, 2, -10, -4, 15];
function swap2(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j]= temp;
  }
function partition(arr, p, q) { 
	let pivot = arr[q];
	let i = p - 1;
	for (let j = p; j < q; j++) {
		if(arr[j] <= pivot){
			i = i +1 ;
			swap2(arr, i, j);
			console.log(`Перестановка зліва від pivot:${arr}`);
		}
	}
	swap2(arr, i + 1, q);
	console.log(`Перестановка  pivot:${arr}`);
	return i + 1;
 }
 function quickSort(arr, p, q) {
	if(p >= q) return
	let i = partition(arr, p, q)
	quickSort(arr, p, i - 1);
	quickSort(arr, i + 1, q);
   }
	 quickSort(arrS, 0, arrS.length - 1);
	 console.log(arrS);

//Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.<br>Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран