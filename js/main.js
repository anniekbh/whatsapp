window.addEventListener("load", function(){
	var casilla = document.getElementById("mensajes");
	var contenedor = document.getElementById("chat");

	casilla.addEventListener("keydown", function(){
		if("keypress" !== "enter");
		imprimirMensaje(casilla.value,nuevaBurbuja.value);
	});	
});

function imprimirMensaje(casilla,contenedor,nuevaBurbuja){
	this.casilla = document.createElement("div");
	this.nuevaBurbuja = document.createTextNode(casilla);
	casilla.appendChild(nuevaBurbuja);
	contenedor.inserBefore(casilla,contenedor.childNodes[0]);
};