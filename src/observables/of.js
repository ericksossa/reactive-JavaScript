const { of } = require("rxjs");

// const obs$ = of(1, 2, 6, 49);
const obs$ = of(...[1, 2, 3, 4, 5], 8, 7, 9);
// const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

console.log('Inicio del Obs$');

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('terminamos la secuencia.')
);
console.log('Fin del Obs$');