const { interval } = require("rxjs");
const { take } = require("rxjs/operators");

const numbers$ = interval(1000);

const takeFourNumbers$ = numbers$.pipe(take(4));

takeFourNumbers$.subscribe(x => console.log('Next: ', x));