import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

// distinctUntilKeyChanged only emmit values only if
// the last value propertie emmited is not the same as the last value emmited.
interface Character {
    name: string;
}

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
    distinctUntilKeyChanged('name'),
)
.subscribe(console.log)