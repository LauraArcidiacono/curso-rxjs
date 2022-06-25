import { of, range, asyncScheduler } from 'rxjs';

const fromOf = of(1,2,3,4,5);
fromOf.subscribe(console.log);

const fromRange = range(1,100);

console.log('inicio');
fromRange.subscribe(console.log);
console.log('fin');

const fromRangeAsync = range(1,100, asyncScheduler);

console.log('inicio');
fromRangeAsync.subscribe(console.log);
console.log('fin');