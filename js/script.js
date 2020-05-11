// коллекция блоков
let blocksQuantity = document.querySelectorAll(".block");
console.log(blocksQuantity.length);

// генерируем случайный индекс блока
let getRandomNumber = function () {
  return Math.floor(Math.random() * blocksQuantity.length);
};
console.log(getRandomNumber());

// let target = blocksQuantity[getRandomNumber()];

// создаем счетчик попыток
let counter = document.querySelector("span");
let counterValue = 7;

counter.innerHTML = counterValue;

// при ошибке счетчик уменьшается на 1, и перезагружает страницу при проигрыше
for (let i = 0; i < blocksQuantity.length; i++) {
  blocksQuantity[i].onclick = function () {
    counterValue--;
    counter.innerHTML = counterValue;
    if (counterValue < 0) {
      alert("Вы проиграли");
      location.reload();
    }    
  };
  // ANCHOR починить победу
  blocksQuantity[getRandomNumber()].onclick = function(){
    alert("Вы победили!");
    location.reload();
  }
}
