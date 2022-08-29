import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

// Emits the most recently emitted value from the source Observable within periodic time intervals.
// Samples the source Observable at periodic time intervals, emitting what it samples.

const interval$ = interval(5000);

const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$),
).subscribe(console.log);