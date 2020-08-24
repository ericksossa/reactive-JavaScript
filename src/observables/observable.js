const { Observable, Observer } = require("rxjs");

const observer = {
    next: value => console.log('Next', value),
    error: error => console.error('err', error),
    complete: () => console.info('complete')
}

const obs$ = new Observable(subs => {
    subs.next('Hi');
    subs.next('word');

    // error
    // const a = undefined;
    // a.name = 'Erick'

    subs.complete();

    subs.next('not');
    subs.next('word');
});


obs$.subscribe(observer);