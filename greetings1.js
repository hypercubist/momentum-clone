const askNameForm = document.querySelector(".js-askNameForm"),
  askNameInput = askNameForm.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LOCALSTORAGE = "currentUser",
  SHOWING_CLASSNAME = "showing";

function saveName(text) {
  localStorage.setItem(USER_LOCALSTORAGE, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = askNameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askName() {
  askNameForm.classList.add(SHOWING_CLASSNAME);
  askNameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  askNameForm.classList.remove(SHOWING_CLASSNAME);
  greetings.classList.add(SHOWING_CLASSNAME);
  greetings.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
  if (currentUser === null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
