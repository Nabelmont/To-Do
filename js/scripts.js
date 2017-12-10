var submitBtn = document.querySelector("#submit");

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var input = document.querySelector("#todoItem");
  var submit = document.querySelector("#todoList");
  submit.appendChild(input);

});
//Need to get input to go to ul
