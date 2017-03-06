var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
  var todo = document.getElementById('todo')

  	if (divtext.style.display == "block" ) {
  		divtext.style.display = "none";

  	} else{
  		divtext.style.display = "block";
  	}

  var quiz1 = document.getElementById('quiz1');
prueba1.onclick = function(){



quiz1.innerHTML = "hola";
}

}




/*var mostarOcultar = function(){
  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');
  var text3 = document.getElementById('text3');

  if (text1.style.display == "block"){
    text1.style.display = "none";
  } else if (text1.style.display == "none"){
    text1.style.display = "block";

  } else if (text2.style.display == "block"){
    text2.style.display = "none";

  } else if (text2.style.display == "none"){

    text2.style.display = "block";

}}*/
