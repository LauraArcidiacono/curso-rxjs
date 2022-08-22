import { fromEvent } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

// Allows to take values as long as the condition is met. If not met, the observer is completed.
// It can receive a second parameter which is INLCUSIVE (on true) and allows to know which was the value that broke the condition.

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y }) => ({x, y})),
    // takeWhile(({ y }) => y <= 150),
    takeWhile(({ y }) => y <= 150, true)// INLCUSIVE (on true) and allows to know which was the value that broke the condition.
)
.subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete'),
})