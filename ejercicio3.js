const prompt = require('prompt-sync')();

let opcion = "";

do {
    console.log("\n=== MENU NEQUI===");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");

    opcion = prompt("Elige una opcion (1 a 4): ");

    if (opcion ==="1") {
        console.log(" Seleccionaste: Ver saldo");
    } else if (opcion === "2") {
        console.log(" Selecionaste: Enviar dinero");
    } else if (opcion === "3") {
        console.log(" Selecionaste: Recargar");
    } else if (opcion === "4") {
        console.log(" ¡Gracias por usar Nequi! saliendo...");
    } else {
        console.log("Opcion no valida.");   
    }
} while (opcion !=="4");

        
