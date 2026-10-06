const movimientos = [50000, -20000, 150000,-10000, -50000, 300000];
    let total = 0;
    let cantidadRetiros = 0;

    for (let contador = 0; contador < movimientos.length; contador++){
        const movimientosActual = movimientos[contador];
  
total +=movimientosActual;

if (movimientosActual < 0) {
    cantidadRetiros++;
 }
}

console.log("El total de dinero movimiento es:", total);
console.log("La cantidad total de retiros fue:", cantidadRetiros);
