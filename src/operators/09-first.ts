import { fromEvent } from 'rxjs';
import { first, tap, map  } from 'rxjs/operators';

// const click$ = fromEvent<MouseEvent>(document, 'click');

// click$.pipe(
//     first(),// obtain only the first event
// )
// .subscribe({
//     next: value => console.log('next:', value),
//     complete: () => console.log('complete'),
// })


const clickWhitPredicate$ = fromEvent<MouseEvent>(document, 'click');// obtain the first event that meets the condition

clickWhitPredicate$.pipe(
    first<MouseEvent>(event => event.clientY >= 150),// obtain only the first event that meets the condition
)
.subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete'),
});

