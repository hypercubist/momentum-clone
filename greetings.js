const greetingText = document.querySelector(".js-greetingText");
const nameForm = document.querySelector(".js-nameForm");
const nameInput = nameForm.querySelector("input");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function showingGreetings(text) {
  nameForm.classList.remove(SHOWING_CN);
  greetingText.classList.add(SHOWING_CN);
  greetingText.innerText = `Good Day, ${text}!`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const submitName = nameInput.value;
  showingGreetings(submitName);
  saveName(submitName);
}

function askingName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleSubmit);
}

function greetings() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askingName();
  } else {
    showingGreetings(currentUser);
  }
}

function init() {
  greetings();
}

init();
