import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// takeUntil receives as parameter an observable, and it will emit values until the observable it received as parameter emits a value.

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);

const clickButton$ = fromEvent(button, 'click');

counter$.pipe(
    takeUntil(clickButton$)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete'),
})