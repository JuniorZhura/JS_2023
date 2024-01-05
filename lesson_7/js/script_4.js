function showRandomPic(path1, path2, path3, path4) {
  let randomNumber = 1 + Math.floor(Math.random() * 4);
  switch (randomNumber) {
    case 1: return path1;
    case 2: return path2;
    case 3: return path3;
    case 4: return path4;
  };
};

let picPath1 = "../img/smiles/smile_1.jpg";
let picPath2 = "../img/smiles/smile_2.jpg";
let picPath3 = "../img/smiles/smile_3.jpg";
let picPath4 = "../img/smiles/smile_4.jpg";

document.write(`<img src="${showRandomPic(picPath1, picPath2, picPath3, picPath4)}" alt="smile">`);


// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

// function oneRandomSmile() {
//   return 1 + Math.floor(Math.random() * 4)
// };
// document.write(`<img src="../img/smiles/smile_${oneRandomSmile()}.jpg" alt="smile">`);