const body = document.querySelector("body");

const IMG_COUNT = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `src/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
function getRandom() {
  const number = Math.floor(Math.random() * IMG_COUNT);
  return number;
}

function init() {
  const ranNum = getRandom();
  paintImage(ranNum);
}

init();
