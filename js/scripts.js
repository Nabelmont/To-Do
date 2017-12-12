//Queries
var submitBtn = document.querySelector('#submit');
var input = document.getElementById('input').value;
var display = document.querySelector('#todoList');


submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var li = document.createElement('li');
  display.appendChild(li);
  textNode = document.createTextNode(input + ' ');
  li.appendChild(input);


});
