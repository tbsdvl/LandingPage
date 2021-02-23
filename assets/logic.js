(function(){
  
    var el = document.querySelectorAll(".wavey")[0];
    var oldText = el.innerText
    var newHtml = "";
    for (var i in el.innerText) { newHtml += ("<span style='animation-delay: " + i/10 + "s;'>" + oldText[i] + "</span>"); }
    el.innerHTML = newHtml;
    
  })();