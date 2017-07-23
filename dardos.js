
function comenzar(){
	
	var boton = document.getElementById("boton1");
	boton.addEventListener("click", jugadores);
	
}

function jugadores() {
		
	var numeroJugadores = document.getElementById("jugadores").value;
	
	sessionStorage.setItem("Jugadores", numeroJugadores);
	
	var final = false;
	
	jugadorActual = 1;
	
	do {
		
		switch (jugadorActual) {
		
			case 1:
			
				nombre = prompt("Introduzca el nombre del primer jugador: ");
				sessionStorage.setItem("Jugador1", nombre);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 2:
			
				nombre = prompt("Introduzca el nombre del segundo jugador: ");
				sessionStorage.setItem("Jugador2", nombre);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 3:
			
				nombre = prompt("Introduzca el nombre del tercer jugador: ");
				sessionStorage.setItem("Jugador3", nombre);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 4:
			
				nombre = prompt("Introduzca el nombre del cuarto jugador: ");
				sessionStorage.setItem("Jugador4", nombre);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 5:
			
				nombre = prompt("Introduzca el nombre del quinto jugador: ");
				sessionStorage.setItem("Jugador5", nombre);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 6:
			
				nombre = prompt("Introduzca el nombre del sexto jugador: ");
				sessionStorage.setItem("Jugador6", nombre);
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
		}
		
	} while (final == false);
	
	var juego = document.getElementById("tipodejuego").value;
	sessionStorage.setItem("juego", juego);
	
	var url = juego + ".html";
	abrirEnPestana(url);
	
}

function abrirEnPestana(url) {
		var a = document.createElement("a");
		a.target = "_blank";
		a.href = url;
		a.click();
	}

/*function abrirVentana(url) {
	
	
    window.open(url, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no");
}
*/
window.addEventListener("load", comenzar, false);