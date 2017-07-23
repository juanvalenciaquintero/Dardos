// JavaScript Document
window.addEventListener("load", comenzar, false);

function comenzar(){
	
	var jugador1= document.getElementById("jugador1");
	var puntos1= document.getElementById("puntos1");
	var ultimo1= document.getElementById("ultimo1");
	
	var jugador2= document.getElementById("jugador2");
	var puntos2= document.getElementById("puntos2");
	var ultimo2= document.getElementById("ultimo2");
	
	var jugador3= document.getElementById("jugador3");
	var puntos3= document.getElementById("puntos3");
	var ultimo3= document.getElementById("ultimo3");
	
	var jugador4= document.getElementById("jugador4");
	var puntos4= document.getElementById("puntos4");
	var ultimo4= document.getElementById("ultimo4");
	
	var jugador5= document.getElementById("jugador5");
	var puntos5= document.getElementById("puntos5");
	var ultimo5= document.getElementById("ultimo5");
	
	var jugador6= document.getElementById("jugador6");
	var puntos6= document.getElementById("puntos6");
	var ultimo6= document.getElementById("ultimo6");
	
	
	
	
	var juego = sessionStorage.getItem("juego");
	
	var numeroJugadores = sessionStorage.getItem("Jugadores");
	
	var final = false;
	
	jugadorActual=1;
		
	
	do {
		
		switch (jugadorActual) {
		
			case 1:
			
				var jug1 = sessionStorage.getItem("Jugador1");	
				jugador1.innerHTML = jug1;
				puntos1.innerHTML=juego;
				sessionStorage.setItem("puntosJug1",juego);
				ultimo1.innerHTML="0";
				sessionStorage.setItem("ultJug1",ultimo1);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 2:
			
				var jug2 = sessionStorage.getItem("Jugador2");	
				var tabla2 = document.getElementById("tabla2");
				tabla2.style.display="block";
				jugador2.innerHTML = jug2;
				puntos2.innerHTML=juego;
				sessionStorage.setItem("puntosJug2",juego);
				ultimo2.innerHTML="0";
				sessionStorage.setItem("ultJug2",ultimo2);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 3:
			
				jug3 = sessionStorage.getItem("Jugador3");	
				var tabla3 = document.getElementById("tabla3");
				tabla3.style.display="block";
				jugador3.innerHTML = jug3;
				puntos3.innerHTML=juego;
				sessionStorage.setItem("puntosJug3",juego);
				ultimo3.innerHTML="0";
				sessionStorage.setItem("ultJug3",ultimo3);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 4:
			
				jug4 = sessionStorage.getItem("Jugador4");	
				var tabla4 = document.getElementById("tabla4");
				tabla4.style.display="block";
				jugador4.innerHTML = jug4;
				puntos4.innerHTML=juego;
				sessionStorage.setItem("puntosJug4",juego);
				ultimo4.innerHTML="0";
				sessionStorage.setItem("ultJug4",ultimo4);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 5:
			
				jug5 = sessionStorage.getItem("Jugador5");
				var tabla5 = document.getElementById("tabla5");
				tabla5.style.display="block";	
				jugador5.innerHTML = jug5;
				puntos5.innerHTML=juego;
				sessionStorage.setItem("puntosJug5",juego);
				ultimo5.innerHTML="0";
				sessionStorage.setItem("ultJug5",ultimo5);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 6:
			
				jug6 = sessionStorage.getItem("Jugador6");	
				var tabla6 = document.getElementById("tabla6");
				tabla6.style.display="block";
				jugador6.innerHTML = jug6;
				puntos6.innerHTML=juego;
				sessionStorage.setItem("puntosJug6",juego);
				ultimo6.innerHTML="0";
				sessionStorage.setItem("ultJug6",ultimo6);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
		}
		
	} while (final == false);
	
	var punt1 = document.getElementById("puntuar1");
	punt1.addEventListener("click", puntuar);
	
	var punt2 = document.getElementById("puntuar2");
	punt2.style.display = "none";
	
	var punt3 = document.getElementById("puntuar3");
	punt3.style.display = "none";
	
	var punt4 = document.getElementById("puntuar4");
	punt4.style.display = "none";
	
	var punt5 = document.getElementById("puntuar5");
	punt5.style.display = "none";
	
	var punt6 = document.getElementById("puntuar6");
	punt6.style.display = "none";
	
	sessionStorage.setItem("JugadorActual", 1);
	
	
	
}

function puntuar() {
	
	var dardos = document.getElementById("dardos");
	dardos.style.display ="block";
	
	
	var aceptar = document.getElementById("sumar");
	aceptar.addEventListener("click", calcular);
		
	
}

function calcular(){
	
	var punt1 = document.getElementById("puntuar1");
	punt1.addEventListener("click", puntuar);
	
	var punt2 = document.getElementById("puntuar2");
	punt1.addEventListener("click", puntuar);
	punt2.style.display = "none";
	
	
	var punt3 = document.getElementById("puntuar3");
	punt1.addEventListener("click", puntuar);
	punt3.style.display = "none";
	
	var punt4 = document.getElementById("puntuar4");
	punt1.addEventListener("click", puntuar);
	punt4.style.display = "none";
	
	var punt5 = document.getElementById("puntuar5");
	punt1.addEventListener("click", puntuar);
	punt5.style.display = "none";
	
	var punt6 = document.getElementById("puntuar6");
	punt1.addEventListener("click", puntuar);
	punt6.style.display = "none";
	
	var actual = parseInt(sessionStorage.getItem("JugadorActual"));
	
	var numeroJugadores = parseInt(sessionStorage.getItem("Jugadores"));
	
	var puntos,ultimo;

	switch (actual) {
		
		case 1:
			
			puntos = sessionStorage.getItem("puntosJug1");
			ultimo = sessionStorage.getItem("ultJug1");	
			punt1.style.display = "block";
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "none";
			
			break;
		
		case 2:
			
			puntos = sessionStorage.getItem("puntosJug2");
			ultimo = sessionStorage.getItem("ultJug2");	
			punt1.style.display = "none";
			punt2.style.display = "block";
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "none";
			break;
		
		case 3:
			
			puntos = sessionStorage.getItem("puntosJug3");
			ultimo = sessionStorage.getItem("ultJug3");	
			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "block";
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "none";
			break;	
			
		case 4:
			
			puntos = sessionStorage.getItem("puntosJug4");
			ultimo = sessionStorage.getItem("ultJug4");	
			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "block";
			punt5.style.display = "none";
			punt6.style.display = "none";
			break;	
			
		case 5:
			
			puntos = sessionStorage.getItem("puntosJug5");
			ultimo = sessionStorage.getItem("ultJug5");	
			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "block";
			punt6.style.display = "none";
			break;
			
		case 6:
			
			puntos = sessionStorage.getItem("puntosJug6");
			ultimo = sessionStorage.getItem("ultJug6");	
			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "block";
			break;
			
	}
	
	var primer = parseInt(document.getElementById("dardo1").value);	
	var segundo = parseInt(document.getElementById("dardo2").value);
	var tercer = parseInt(document.getElementById("dardo3").value);
	
	
	var doble1 = document.getElementById("radio1_1").checked;
	var triple1 = document.getElementById("radio1_2").checked;
	
	var doble2 = document.getElementById("radio2_1").checked;
	var triple2 = document.getElementById("radio2_2").checked;
	
	var doble3 = document.getElementById("radio3_1").checked;
	var triple3 = document.getElementById("radio3_2").checked;
	
	
	switch (actual) {
		
		case 1: 
			var suma = parseInt(sessionStorage.getItem("puntosJug1")); 	
			break;
			
		case 2: 
			var suma = parseInt(sessionStorage.getItem("puntosJug2")); 	
			break;
			
		case 3: 
			var suma = parseInt(sessionStorage.getItem("puntosJug3")); 	
			break;
			
		case 4: 
			var suma = parseInt(sessionStorage.getItem("puntosJug4")); 	
			break;
			
		case 5: 
			var suma = parseInt(sessionStorage.getItem("puntosJug5")); 	
			break;
			
		case 6: 
			var suma = parseInt(sessionStorage.getItem("puntosJug6")); 	
			break;
	
	}
	
	var tirada;
	
	var fin = false;
	
	if (doble1) {
		tirada = primer*2;	
			
		} else if (triple1) {
			tirada = primer*3;			
						
		} else {
			tirada = primer;			
		}
	
	if (doble2) {
		
		tirada = tirada + segundo*2;
		
	} else if (triple2) {
		
			tirada = tirada + segundo*3;			
						
		} else {
			tirada = tirada + segundo;			
		}
		
	if (doble3) {
		
		tirada = tirada + tercer*2;
		
	} else if (triple3) {
		
			tirada = tirada + tercer*3;			
						
		} else {
			tirada = tirada + tercer;			
		}
		
	if (suma > tirada) {
		
			suma = suma - tirada;	
			
			switch(actual) {
			
				case 1:
					puntos1.innerHTML=suma;
					ultimo1.innerHTML=tirada;
					sessionStorage.setItem("puntosJug1", suma);
					break;
				case 2:
					puntos2.innerHTML=suma;
					ultimo2.innerHTML=tirada;
					sessionStorage.setItem("puntosJug2", suma);
					break;	
				case 3:
					puntos3.innerHTML=suma;
					ultimo3.innerHTML=tirada;
					sessionStorage.setItem("puntosJug3", suma);
					break;	
				case 4:
					puntos4.innerHTML=suma;
					ultimo4.innerHTML=tirada;
					sessionStorage.setItem("puntosJug4", suma);
					break;
				case 5:
					puntos5.innerHTML=suma;
					ultimo5.innerHTML=tirada;
					sessionStorage.setItem("puntosJug5", suma);
					break;
				case 6:
					puntos6.innerHTML=suma;
					ultimo6.innerHTML=tirada;
					sessionStorage.setItem("puntosJug6", suma);
					break;
			}
			
			
			
		} else if ( suma == tirada) {
			
			var ganador = "Jugador" + actual;
			
			
			alert("¡¡Ha ganado " + sessionStorage.getItem(ganador) + "!!");
			
			fin = true;
			
			location.href="index.html";
				
		} else {
			
			alert("Te has pasado!!");
				
		}
	
	
	if (!fin){
	
		if(actual<numeroJugadores) {
			actual++;
		} else {
			actual=1;	
		}
	
		sessionStorage.setItem("JugadorActual",actual);
		
		
		
		control_botones(actual);
		
	
	}
	
	
}

function control_botones(act) {
	
	var punt1 = document.getElementById("puntuar1");
		
	var punt2 = document.getElementById("puntuar2");
		
	var punt3 = document.getElementById("puntuar3");
		
	var punt4 = document.getElementById("puntuar4");	
	
	var punt5 = document.getElementById("puntuar5");	
	
	var punt6 = document.getElementById("puntuar6");
	
	var pri = document.getElementById("dardo1");
	var seg = document.getElementById("dardo2");
	var ter = document.getElementById("dardo3");
	
	
		
	switch (act) {
		
		case 1:

			punt1.style.display = "block";
			punt1.addEventListener("click", puntuar);
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "none";
			
			break;
		
		case 2:

			punt1.style.display = "none";
			punt2.style.display = "block";
			punt2.addEventListener("click", puntuar);
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "none";
			break;
		
		case 3:

			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "block";
			punt3.addEventListener("click", puntuar);
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "none";
			break;	
			
		case 4:

			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "block";
			punt4.addEventListener("click", puntuar);
			punt5.style.display = "none";
			punt6.style.display = "none";
			break;	
			
		case 5:

			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "block";
			punt5.addEventListener("click", puntuar);
			punt6.style.display = "none";
			break;
			
		case 6:

			punt1.style.display = "none";
			punt2.style.display = "none";
			punt3.style.display = "none";
			punt4.style.display = "none";
			punt5.style.display = "none";
			punt6.style.display = "block";
			punt6.addEventListener("click", puntuar);
			break;
			
	}
	
		pri.value=0;
		seg.value=0;
		ter.value=0;
		dardos.style.display="none";
		
		var simple1 = document.getElementById("radio1_0");
		simple1.checked=true;
		var simple2 = document.getElementById("radio2_0");
		simple2.checked=true;
		var simple3 = document.getElementById("radio3_0");
		simple3.checked=true;
	
}
