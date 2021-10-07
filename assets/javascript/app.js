var mylist = document.getElementsByTagName("li")
var i;
for(i=0;i<mylist.length;i++){
    var span=document.createElement("span")
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    mylist[i].appendChild(span);
}
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('#li_elments');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);


function Appendl(){
    var input = document.querySelector("#Txtinput").value
    var list=document.querySelector("#li_elements")
    
        const element = document.createElement('li')
        
        const textNode = document.createTextNode(input)
        element.appendChild(textNode)
        list.appendChild(element)
        document.getElementById.innerHTML = list
        var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  } 
    
    }