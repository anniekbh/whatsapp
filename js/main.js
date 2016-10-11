window.addEventListener("load", function(){
	var casilla = document.getElementById("mensajes");
	//var contenedor = document.getElementById("chat");
	var conversacion = document.getElementById("conversacion");

	casilla.addEventListener("keyup", function(event){
		if(event.keyCode == 13){
			imprimirMensaje();
			casilla.value="";
		}
	});	
		
	
	function imprimirMensaje(){
		var caja = document.createElement("div");
		var cajita = document.createElement("div");
		var texto = document.createElement("p");
		var clock = document.createElement("div");

		caja.classList.add("w-message", "w-message-out");
		conversacion.appendChild(caja);
		
		cajita.classList.add("w-message-text");
		caja.insertBefore(cajita, caja.children[0]);
		
		texto.textContent = casilla.value;
		cajita.insertBefore(texto, cajita.children[0]);

		clock.classList.add("time");
		clock.textContent = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
		cajita.appendChild(clock);
	};
});