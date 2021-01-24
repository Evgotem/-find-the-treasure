// коллекция блоков
let blocksQuantity = document.querySelectorAll(".block");
let hideTarget = document.querySelector('.hide-target');



// генерируем случайный индекс блока
let getRandomNumber = function () {
  return Math.floor(Math.random() * blocksQuantity.length);
};
let randomNumber = getRandomNumber();
let target = blocksQuantity[randomNumber];
// генерируем кнопку скрытия цели
hideTarget.innerHTML = 'Показать цель';
hideTarget.onclick = () => {
   target.classList.toggle('active');
   if (hideTarget.innerHTML == 'Показать цель') {
      hideTarget.innerHTML = 'Скрыть цель';
   } else {
      hideTarget.innerHTML = 'Показать цель';
   }
}

// создаем счетчик попыток
let counter = document.querySelector("span");
let counterValue = 12;

counter.innerHTML = counterValue;

// при ошибке счетчик уменьшается на 1, и перезагружает страницу при проигрыше
for (let i = 0; i < blocksQuantity.length; i++) {
  blocksQuantity[i].onclick = function () {
    counterValue--;
    counter.innerHTML = counterValue;
    if (blocksQuantity[i] == target) {
       alert("Вы победили!");
       location.reload();
    } else if (blocksQuantity[i] != target) {
      blocksQuantity[i].classList.add('hiden');
    }
    if (counterValue < 0) {
      alert("Проигрышь :(");
      location.reload();
    }    
  };
 
}
