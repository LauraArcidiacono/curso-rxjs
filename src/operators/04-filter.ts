import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

range(1,10).pipe(
   filter((value, index) => {
       console.log('index', index)
       return value % 2 ===1
    })
).subscribe(console.log);


interface Personaje {
    type: string;
    name: string;
}

const personajes$ = from([
    {
        type: 'heroe',
        name: 'Batman',
    },
    {
        type: 'heroe',
        name: 'Robin',
    },
    {
        type: 'villano',
        name: 'Joker',
    }
]);

// personajes$.pipe(
//     filter(personaje => personaje.type === 'heroe')
// ).subscribe(personaje => console.log('HEROE', personaje.name));

const personajes: Personaje[] = [
    {
        type: 'heroe',
        name: 'Batman',
    },
    {
        type: 'heroe',
        name: 'Robin',
    },
    {
        type: 'villano',
        name: 'Joker',
    }
];

from(personajes).pipe(
    filter(personaje => personaje.type === 'heroe')
).subscribe(personaje => console.log('HEROE', personaje.name));