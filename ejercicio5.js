// Ejercicio 5: Varias cuentas a la vez (Bucles anidados)
const usuarios = [
    { nombre: "Ana", movimientos: [50000, -10000, 20000] },
    { nombre: "Carlos", movimientos: [-5000, -15000, 100000] },
    { nombre: "Lucía", movimientos: [30000, 40000, -10000] }
];

for (let i = 0; i < usuarios.length; i++) {
    let usuarioActual = usuarios[i];
    let totalUsuario = 0;

    for (let j = 0; j < usuarioActual.movimientos.length; j++) {
        totalUsuario += usuarioActual.movimientos[j];
    }

    console.log(`Usuario: ${usuarioActual.nombre} - Gasto/Total neto: $${totalUsuario}`);
}