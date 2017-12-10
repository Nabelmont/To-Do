var submitBtn = document.querySelector("#submit");

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var input = querySelector('#input');
  var display = querySelector('#todoList');
  display.appendChild(input);

});
// // //Need to get input to go to ul
