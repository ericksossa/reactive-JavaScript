const { interval } = require('rxjs');
const { map, take, tap } = require('rxjs/operators');

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 12
 */

// Salida esperada ===
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

    const inicio = 12;
    const countdown$ = interval(700).pipe(
        tap(val => console.log('tap', val)),
        map(n => inicio - n),
        take(inicio + 1)
    );


    // No tocar esta línea ==================
    countdown$.subscribe(console.log); // =
    // ======================================


})();

