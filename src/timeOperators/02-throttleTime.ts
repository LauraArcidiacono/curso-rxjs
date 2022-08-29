import { asyncScheduler, fromEvent, pluck } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

// Emits a value from the source Observable, then ignores subsequent source values
// for duration milliseconds, then repeats this process.
// Lets a value pass, then ignores source values for the next duration milliseconds.
// Emmit and then wait.

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    throttleTime(1000)
)//.subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true, // initial value
        trailing: true,// final value
    }),
    pluck('target', 'value'),
    distinctUntilChanged(),
)
.subscribe(console.log);