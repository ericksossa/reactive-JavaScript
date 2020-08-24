const { of, from } = require("rxjs");
const { distinct } = require("rxjs/operators");

const numeros$ = of(1, '1', 1, 2, 3, 3, 4, 5, 1, '1')

numeros$.pipe(
    distinct()
).subscribe(console.log);


const personajes = [
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
];

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log);