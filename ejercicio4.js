const moviminetos = [0, 50000, -20000, "pagoComercio", 10000, 0];
let posicionEncontrada = -1;

for (let i = 0; i < moviminetos.length; i++) {
    let mov = moviminetos[i];

    if (mov ===0) {
        continue;
    }

    if (mov ==="pagoComercio") {
        posicionEncontrada = i;
        console.log(`¡Pago a comercio encontrado en la posicion: ${posicionEncontrada}!`);
        break;
    }

    console.log("Revisando moviminetos valido:",mov);
    
}