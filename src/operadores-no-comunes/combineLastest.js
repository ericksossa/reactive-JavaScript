const { interval, combineLatest } = require("rxjs");
const { mapTo, take } = require("rxjs/operators");


const interval$ = interval(100).pipe(mapTo('A'), take(3));
const interval2$ = interval(200).pipe(mapTo('B'), take(3));


combineLatest(interval$, interval2$)

    .subscribe(next => console.log(next)); 