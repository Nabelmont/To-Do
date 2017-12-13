//Queries
var addBtn = document.getElementById('add');
var list = document.getElementById('list');

add.onclick = function() {
  addLi(list);
}

function addLi(targetUi) {
  var inputText = document.getElementById('input').value;
  var li = document.createElement('li');
  var textNode = document.createTextNode(inputText + " ");
  var removeButton = document.createElement('button');
  document.getElementById('input').value = "";

  if(inputText.length === 0) {
    alert("You didn't type anything");
    return false;
  }

  removeButton.className = "remove";
  removeButton.innerHTML = " Done!";
  removeButton.setAttribute("onclick", "remove(this);");

  li.appendChild(textNode);
  li.appendChild(removeButton);

  targetUi.appendChild(li);
  }
