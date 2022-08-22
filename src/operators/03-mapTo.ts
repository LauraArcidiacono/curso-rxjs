import { fromEvent } from 'rxjs';
import { map, mapTo, tap, first } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyUp$.pipe(
    map(event => event.code),
)
keyupCode$.subscribe(code => console.log('code on map', code));

const keyupMapTo$ = keyUp$.pipe(
    mapTo('Laura')
);

keyupMapTo$.subscribe(code => console.log('code on mapTo', code));


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX,
    // })),
    map(({ clientX, clientY }) => ({ clientX, clientY})),// map receives a mouseEvent, of which it destructs two properties, and returns an object that includes only those two properties
    first(event => event.clientY >= 150), // first receives the object that emits map, and will only emit the first value that fulfills the condition
)