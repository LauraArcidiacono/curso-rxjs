import { fromEvent } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyUp$.pipe(
    map(event => event.code),
)
keyupCode$.subscribe(code => console.log('code on map', code));

const keyupMapTo$ = keyUp$.pipe(
    mapTo('Laura')
);

keyupMapTo$.subscribe(code => console.log('code on mapTo', code));