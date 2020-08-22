const { of } = require('rxjs');

/**
 * Ejercicio: Imprimir solo el nombre que tenga la edad mas alta
 *  Resultado --> 'Beer'
 */



(() => {

    const personas$ = of(
        { age: 7, name: 'Foo' },
        { age: 5, name: 'Bar' },
        { age: 19, name: 'Carl' },
        { age: 15, name: 'Bob' },
        { age: 59, name: 'Beer' }
    ).pipe(
        // Utilizar los operadores aqui

    )



    // ========================================
    // Nota, el subscribe debe de ser así
    // .subscribe( console.log )
    // Es decir, la salida en el subscribe debe 
    // de estar procesada en su totalidad
    // ========================================

    personas$.subscribe(console.log);







})();

