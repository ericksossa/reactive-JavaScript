const { range } = require("rxjs");
const { filter } = require("rxjs/operators");

range(20, 30).pipe(
    filter((val, i) => {
        console.log('index', i);

        return val % 2 === 1;
    }))