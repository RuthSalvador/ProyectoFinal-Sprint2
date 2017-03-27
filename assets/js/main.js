/*** Botones ***/
var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
  var text1 = document.getElementById('text1');
	var text2 = document.getElementById('text2');
	var text3 = document.getElementById('text3');


	if (divtexte == "text1") {
		divtext.style.display ="block";
		text2.style.display = "none";
		text3.style.display = "none";

	} else if (divtexte == "text2") {
		divtext.style.display ="block";
		text1.style.display = "none";
		text3.style.display = "none";

	} else if (divtexte == "text3") {
		divtext.style.display ="block";
		text1.style.display = "none";
		text2.style.display = "none";
	}
}

/*** Respuestas correctas ***/

var quiz1 = document.getElementById('quiz1');
var opc1 = document.getElementsByName('opc1');
var opc2 = document.getElementsByName('opc2');
var opc3 = document.getElementsByName('opc3');
var correctasQ1 = 0;

	prueba1 = function(){
		if ((opc1[0].checked == false) && (opc1[1].checked == false) && (opc1[2].checked == false)){
			alert ('Por favor, responde la primera pregunta');
		} else if ((opc2[0].checked == false) && (opc2[1].checked == false) && (opc2[2].checked == false)){
			alert ('Por favor, responde la segunda pregunta');
		} else if ((opc3[0].checked == false) && (opc3[1].checked == false) && (opc3[2].checked == false)){
			alert ('Por favor, responde la tercera pregunta');
		} else{
			if(opc1[0].checked == true) {
				correctasQ1 ++;
			}
			if (opc2[1].checked == true) {
				correctasQ1 ++;
			}
			if (opc3[2].checked == true) {
				correctasQ1 ++;
			}
			quiz1.innerHTML = "Tienes " + correctasQ1 + " respuesta(s) correctas.";
		}

	}

var quiz2 = document.getElementById('quiz2');
var opc4 = document.getElementsByName('opc4');
var opc5 = document.getElementsByName('opc5');
var opc6 = document.getElementsByName('opc6');
var correctasQ2 = 0;

	prueba2 = function(){
		if ((opc4[0].checked == false) && (opc4[1].checked == false) && (opc4[2].checked == false)){
			alert ('Por favor, responde la primera pregunta');
		} else if ((opc5[0].checked == false) && (opc5[1].checked == false) && (opc5[2].checked == false)){
			alert ('Por favor, responde la segunda pregunta');
		} else if ((opc6[0].checked == false) && (opc6[1].checked == false) && (opc6[2].checked == false)){
			alert ('Por favor, responde la tercera pregunta');
		} else{
			if(opc4[1].checked == true) {
				correctasQ2 ++;
			}
			if (opc5[0].checked == true) {
				correctasQ2 ++;
			}
			if (opc6[1].checked == true) {
				correctasQ2 ++;
			}
			quiz2.innerHTML = "Tienes " + correctasQ2 + " respuesta(s) correctas.";
		}
	}
