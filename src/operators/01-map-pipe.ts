import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

const observer = {
    next: value => console.log('next', value),
    complete: () => console.log('complete')
};

const myMapFunction = x => x * 10;

range(1,5).subscribe(value => console.log(myMapFunction(value)));

range(1,5).pipe(
    map<number, number>(value => value * 10)
)
.subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyUp$.pipe(
    map(event => event.code),
)
keyupCode$.subscribe(code => console.log('code on map', code));
