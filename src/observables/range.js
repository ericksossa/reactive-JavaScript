const { range, asyncScheduler } = require("rxjs");

const src$ = range(-5, 10);
// const src$ = range(1, 5, asyncScheduler);

console.log('Inicio');

src$.subscribe(console.log);
console.log('Fin');