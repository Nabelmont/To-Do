//Queries
var submitBtn = document.querySelector('#submit');
var input = document.getElementById('input');
var display = document.querySelector('#todoList');
var todo = [];
var completed = [];

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var li = document.createElement('li');
  display.appendChild(li);
  li.appendChild(todo);
  todo.appendChild(input);


});



// function newButton() {
//   var btn = document.createElement('button');
//   btn.textContent = "Done";
//
// }
