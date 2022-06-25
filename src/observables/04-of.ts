import  {of} from 'rxjs';

//Imprime cada valor
// const observable$ = of(1,2,3,4,5,6, 'a','b','c','d');

// Imprime un solo valor: el array completo
// const observable$ = of([1,2,3,4,5,6])

// Imprime cada valor del array por separado gracias al Spred operator, y luego el resto de valores
// const observable$ = of(...[1,2,3,4,5,6], 'a','b','c','d');

const observable$ = of([1,2], {a: 1, b: 2}, function(){}, true, Promise.resolve(false));

console.log('Ínicio del observable$')
observable$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminó la secuencia')
);
console.log('Fin del observable$')