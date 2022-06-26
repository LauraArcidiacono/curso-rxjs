import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyUp$.pipe(
    map(event => event.code),
)
keyupCode$.subscribe(code => console.log('code on map', code));

// Para buscar una propiedad dentro de una propiedad de un objeto,
// como si fuera la dot notation, se utiluza el nombre de la propiedad
// entre comillas y se escriben de izq a derecha, ej: = a target.baseURI
const keyupPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI')
);

keyupCode$.subscribe(console.log);
keyupPluck$.subscribe(code => console.log('code on pluck', code));