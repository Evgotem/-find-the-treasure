// коллекция блоков
let blocksQuantity = document.querySelectorAll(".block");
let hideTarget = document.querySelector('.hide-target');
let input = document.querySelector('.input');


// генерируем случайный индекс блока
let getRandomNumber = function () {
  return Math.floor(Math.random() * blocksQuantity.length);
};
let randomNumber = getRandomNumber();
let target = blocksQuantity[randomNumber];
// генерируем кнопку скрытия цели
hideTarget.innerHTML = 'Показать клад';
hideTarget.onclick = () => {
   target.classList.toggle('active');
   if (hideTarget.innerHTML == 'Показать клад') {
      hideTarget.innerHTML = 'Скрыть клад';
   } else {
      hideTarget.innerHTML = 'Показать клад';
   }
}

// создаем счетчик попыток
let counter = document.querySelector(".counter");
let counterValue = +input.value;
counter.innerHTML = counterValue;
input.onchange = () => {
   counter.innerHTML = +input.value;
   counterValue = +input.value;
}

// при ошибке счетчик уменьшается на 1, и перезагружает страницу при проигрыше
for (let i = 0; i < blocksQuantity.length; i++) {
   function areYouWin  (x) {
      target.classList.toggle('active');
      setTimeout(() => alert(x), 100);
      setTimeout(() => location.reload(), 1000);
   }
  blocksQuantity[i].onclick = function () {
    counterValue--;
    counter.innerHTML = counterValue;
    if (counterValue < 1 && blocksQuantity[i] != target) {
      areYouWin('Вы проиграли :(');
  
    }  else if (blocksQuantity[i] == target) {
      areYouWin('Вы выиграли :)');
  
    } else if (blocksQuantity[i] != target) {
      blocksQuantity[i].classList.add('hiden');
    }  
  };
 
}

