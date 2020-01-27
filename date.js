const dateText = document.querySelector(".js-date");

function getDate() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  dateText.innerText = `${month + 1} / ${day}`;
}

function init() {
  getDate();
}

init();
