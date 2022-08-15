var lista_maquina = ["piedra", "papel", "tijera"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var opcion_jugador = prompt("Cual es tu jugada? digita el numero de tu eleccion: 1) piedra  2) papel  3) tijera");
var opcion_maquina = lista_maquina[getRandomInt(3)];
if (opcion_jugador == 1){
    opcion_jugador = "piedra"
}else if (opcion_jugador == 2){
    opcion_jugador = "papel"
}
else if (opcion_jugador == 3){
    opcion_jugador = "tijera"
}
document.write("Jugador selecciono: " + opcion_jugador + " ------ ")
document.write("Maquina Selecciono: " + opcion_maquina );

switch (true){
    case (opcion_jugador === opcion_maquina):
        document.write(" ----- ES UN EMPATE");
        break

    case ((opcion_jugador === "piedra" && opcion_maquina === "tijera") || (opcion_jugador === "papel" && opcion_maquina === "piedra") 
       || (opcion_jugador === "tijera" && opcion_maquina === "papel")):
        document.write(" ----- GANASTE");
        break

    case ((opcion_jugador === "papel" && opcion_maquina === "tijera") || (opcion_jugador === "tijera" && opcion_maquina === "piedra")
       || (opcion_jugador === "piedra" && opcion_maquina === "papel")):
        document.write(" ----- PERDISTE");
        break

}