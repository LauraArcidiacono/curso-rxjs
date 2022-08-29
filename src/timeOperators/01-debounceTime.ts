import { fromEvent, pluck } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Emits a notification from the source Observable only after a particular time span has
// passed without another source emission.It's like delay , but passes only the most recent
// notification from each burst of emissions.
// Wait and then emmit.

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    debounceTime(1000)
)//.subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged(),
)
.subscribe(console.log);