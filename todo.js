const todoList = document.querySelector(".js-todoList"),
  todoForm = document.querySelector(".js-todoForm"),
  todoInput = document.querySelector(".js-todoInput");

const LS_TODO = "loadedTodo";

let todoListArray = [];

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodoListArray = todoListArray.filter(function(todoObj) {
    return todoObj.id !== parseInt(li.id);
  });
  todoListArray = cleanTodoListArray;
  saveTodo();
}
function displayTodo(submitedText) {
  const newId = Math.floor(Math.random() * 1000000000000);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = submitedText;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.id = newId;
  todoList.appendChild(li);
  const todoObj = {
    text: submitedText,
    id: newId
  };
  todoListArray.push(todoObj);
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(LS_TODO, JSON.stringify(todoListArray));
}

function submitHandler(event) {
  event.preventDefault();
  const submitedText = todoInput.value;
  todoInput.value = "";
  displayTodo(submitedText);
}

function loadSaved() {
  const loadedTodo = localStorage.getItem(LS_TODO);
  if (loadedTodo !== null) {
    const parsedTodo = JSON.parse(loadedTodo);
    parsedTodo.forEach(function(todoObj) {
      displayTodo(todoObj.text);
    });
  }
}

function init() {
  loadSaved();
  todoForm.addEventListener("submit", submitHandler);
}

init();
