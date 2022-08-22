import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// distinctUntilChanged only emmit values only if
// the last value emmited is not the same as the last value emmited.

const numbers$ = of(1,1,'1','hola','hola',9,1,2,3,6,3,'9',4,5,3,4,6,7,2,3,1,5,8,9);
 numbers$.pipe(
     distinctUntilChanged()
 ).subscribe(console.log);

interface Character {
    name: string;
}
// To work with objects, disctintUntilChanged needs another parameter,
// since objects do not point to the same memory space. And it will compare
// the previous value emmited with the current value.
const characters: Character[] = [
    {
        name: 'Pepe',
    },
    {
        name: 'Pepito',
    },
    {
        name: 'Pepon',
    },
    {
        name: 'Pepe',
    },
    {
        name: 'Pepona',
    },
    {
        name: 'Pepecito',
    },
    {
        name: 'Pepecito',
    },
];

from(characters).pipe(
    distinctUntilChanged((prev, current) => prev.name === current.name),
)
.subscribe(console.log)