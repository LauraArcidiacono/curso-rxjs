import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

// takeUntil receives as parameter an observable, and it will emit values until the observable it received as parameter emits a value.

// skip is used to skip or omit a certain number of broadcasts.

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);

const clickButton$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1), // skip the first click
    tap(() => console.log('tap despues de skip')),
);

counter$.pipe(
    takeUntil(clickButton$)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete'),
})