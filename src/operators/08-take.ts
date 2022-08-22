import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
    tap(tap => console.log('tap', tap)),
    take(2)
)
.subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete'),
})