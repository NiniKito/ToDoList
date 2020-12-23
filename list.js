var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
var txt = document.createTextNode("წაშლა");
span.className = "close";
span.appendChild(txt);
list[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(func) {
  if (func.target.tagName === 'LI') {
    func.target.classList.toggle('checked');
  }
}, false);
function addinlist() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var x = document.createTextNode(inputValue);
  li.appendChild(x);
  if (inputValue === '') {
    alert("გთხოვთ შეიყვანოთ მნიშვნელობა");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
  var span = document.createElement("span");
  var txt = document.createTextNode("წაშლა");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}}
