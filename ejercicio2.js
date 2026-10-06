const prompt = require(`prompt-sync`)();
const pinCorrecto = "1234";

let intento = prompt("Escribir tu PIN: ");
while (intento !== pinCorrecto) {
    console.log("pin incorrecto. intentalo de nuevo.");
    intento = prompt("Escribe tu Pin: ");
}

console.log("¡Bienvenido a Nequi!");
