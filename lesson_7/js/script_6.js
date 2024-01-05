function showBanner(link, image, title) {
  document.write(
    `<div>
      <h2>${title}</h2>
      <a href=${link}>
        <img class="banner" src="${image}" alt="banner">
      </a>
    </div>`
  );
};

let titleName = 'Having fun at my free time not resting in the Maldives, but sitting at home studying JavaScript';
let imageAddress = "https://klike.net/uploads/posts/2019-11/1574607579_2.jpg";
let linkAddress = "https://www.youtube.com/watch?v=RYBHlcV-L40";

showBanner(linkAddress, imageAddress, titleName);


// Створити функцію, яка виводить банер. У функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення. Тег img повинен знаходитись у середині тега a.