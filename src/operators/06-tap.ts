import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap(value => {
        console.log('antes', value)
        return 100
    }),
    map(value => value * 10),
    tap({
        next: value => console.log('antes', value),
        complete: () => console.log('Se terminó')
    })
).subscribe(value=> console.log('value en subscription',value))