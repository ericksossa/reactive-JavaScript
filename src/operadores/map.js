const { range } = require("rxjs");
const { map } = require("rxjs/operators");

range(1, 5).pipe(
    map(val => {
        return val * 10
    })
).subscribe(console.log)