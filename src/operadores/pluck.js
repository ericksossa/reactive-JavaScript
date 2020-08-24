const { from } = require("rxjs");
const { pluck } = require("rxjs/operators");

const source$ = from([
    { id: 1, age: 30, job: { title: 'Developer', language: 'JavaScript' } },
    //will return undefined when no job is found
    { id: 2, age: 35 }
]);

const example = source$.pipe(pluck('id', 'job'));

const subscribe = example.subscribe(val => console.log(val));


//MapTo