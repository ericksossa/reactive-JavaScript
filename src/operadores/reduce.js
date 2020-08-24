const { interval } = require("rxjs");
const { reduce, take } = require("rxjs/operators");



const totalReducer = (acumulador, valorActual) => {
    return acumulador + valorActual;
}


interval(1000)
.pipe(
    // take(4), // ----->?
    // tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});
