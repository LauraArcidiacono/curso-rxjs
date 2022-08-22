import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

// distinct only passes values that have not been previously emitted by the observable.
// disctinct use strict equality

const numbers$ = of(1,1,'1','hola','hola',9,1,2,3,6,3,'9',4,5,3,4,6,7,2,3,1,5,8,9);
 numbers$.pipe(
     distinct()
 ).subscribe(console.log);

interface Character {
    name: string;
}
// To work with objects, disctint needs more information through another parameter,
// since objects do not point to the same memory space.
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
    distinct(character => character.name),
)
.subscribe(console.log)
