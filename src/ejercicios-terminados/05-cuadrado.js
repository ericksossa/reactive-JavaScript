const { from } = require('rxjs');
const { filter, map } = require('rxjs/operators');

/**
 * Ejercicio: 
 * Imprimir el numero al cuadradro de solo los numero pares
 *
 */

(() => {


    const datos = [6, 2, 3, 8, 4, 7];

    from(datos).pipe(
        filter(val => val % 2 === 0),
        map(n => n * n)

    ).subscribe(console.log)



})();

