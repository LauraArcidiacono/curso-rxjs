import { fromEvent, pluck } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

// Emits the most recently emitted value from the source Observable within periodic time intervals.
// Samples the source Observable at periodic time intervals, emitting what it samples.


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(1000), // To save processing resources, the sampleTime should be placed before the other operators.
    map(({ x, y }) => ({ x, y })),
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    sampleTime(1000),
    pluck('target', 'value'),
)
.subscribe(console.log);