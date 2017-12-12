//Queries
var submitBtn = document.querySelector('#submit');
var input = document.querySelector('#input');
var display = document.querySelector('#todoList');
var todo = [];
var completed = [];

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var li = document.createElement('li');
  display.appendChild(li);
  li.appendChild(todo);
  todo.appendChild(input).textContent;


});
