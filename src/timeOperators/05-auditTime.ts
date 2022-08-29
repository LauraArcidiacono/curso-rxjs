import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

// Ignores source values for duration milliseconds, then emits
// the most recent value from the source Observable, then repeats this process.
// When it sees a source value, it ignores that plus the next ones for duration
// milliseconds, and then it emits the most recent value from the source.


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x }) => x),
    tap(value => console.log('tap', value)),
    auditTime(2000),
).subscribe(console.log);