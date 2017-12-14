//Queries
var addBtn = document.getElementById('add');
var list = document.getElementById('list');
var doneList = document.getElementById('doneList');
var removeButton = document.getElementById('remove');
var textNode = document.getElementById('')
// add function
addBtn.onclick = function(e) {
  e.preventDefault();
  addLi(list);
}

// function that adds li to list as well as a done button
function addLi(targetUi) {
  var inputText = document.getElementById('input').value;
  var li = document.createElement('li');
  var textNode = document.createTextNode(inputText + " ");
  var removeButton = document.createElement('button');
console.log(textNode);

  if(inputText.length === 0) {
    alert("You didn't type anything");
    return false;
  }

  removeButton.className = "remove";
  removeButton.innerHTML = " Completed!";
  removeButton.setAttribute("onclick", "remove(this);");

  li.appendChild(textNode);
  li.appendChild(removeButton);

  targetUi.appendChild(li);
}
