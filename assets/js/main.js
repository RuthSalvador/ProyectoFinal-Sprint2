var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
  var todo = document.getElementById('todo')

  	if (divtext.style.display == "block" ) {
  		divtext.style.display = "none";

  	} else{
  		divtext.style.display = "block";
  	}
}

var quiz1 = document.getElementById('quiz1');
var opc1 = document.getElementsByName('opc1');
var opc2 = document.getElementsByName('opc2');
var opc3 = document.getElementsByName('opc3');

	prueba1 = function(){
		if ((opc1[0].checked == false) && (opc1[1].checked == false) && (opc1[2].checked == false)){
			alert ('Por favor, responde la primera pregunta');
		} else if ((opc2[0].checked == false) && (opc2[1].checked == false) && (opc2[2].checked == false)){
			alert ('Por favor, responde la segunda pregunta');
		} else if ((opc3[0].checked == false) && (opc3[1].checked == false) && (opc3[2].checked == false)){
			alert ('Por favor, responde la tercera pregunta');
		} //else{}

		//quiz1.innerHTML = "hola";
	}

var quiz2 = document.getElementById('quiz2');
var opc4 = document.getElementsByName('opc4');
var opc5 = document.getElementsByName('opc5');
var opc6 = document.getElementsByName('opc6');

	prueba2 = function(){
		if ((opc4[0].checked == false) && (opc4[1].checked == false) && (opc4[2].checked == false)){
			alert ('Por favor, responde la primera pregunta');
		} else if ((opc5[0].checked == false) && (opc5[1].checked == false) && (opc5[2].checked == false)){
			alert ('Por favor, responde la segunda pregunta');
		} else if ((opc6[0].checked == false) && (opc6[1].checked == false) && (opc6[2].checked == false)){
			alert ('Por favor, responde la tercera pregunta');
		}

		//quiz2.innerHTML = "hola";
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
