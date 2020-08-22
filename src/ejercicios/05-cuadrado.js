const { from } = require('rxjs');

/**
 * Ejercicio: 
 * Imprimir el numero al cuadradro de solo los numero pares
 *
 */

(() => {


    const datos = [6, 2, 3, 8, 4, 7];

    from(datos).pipe(
        // Trabajar aquí

    ).subscribe(console.log)



})();

