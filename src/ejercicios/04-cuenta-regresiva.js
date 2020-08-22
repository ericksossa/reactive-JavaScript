const { interval } = require('rxjs');

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
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
    );


    // No tocar esta línea ==================
    countdown$.subscribe(console.log); // =
    // ======================================


})();

