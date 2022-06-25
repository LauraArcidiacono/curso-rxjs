import { of, from } from 'rxjs';

const observer = {
    next: valor => console.log('next', valor),
    complete: () => console.log('complete')
};

const usingFrom = from([1,2,3,4,5])
const usingOf =  of([1,2,3,4,5])

usingFrom.subscribe(observer);
usingOf.subscribe(observer);

const fromPromise = from(fetch('https://api.github.com/users/LauraArcidiacono'));

fromPromise.subscribe(observer);
fromPromise.subscribe(async (resp) => {
    const data = await resp.json();
    console.log(data)
});

// Funcion generadora
const myGenerador = function*() {
    yield 1;
    yield 2;
    yield 3
    yield 4;
    yield 5;
};

const myIterable = myGenerador();

for(let id of myIterable) {
    console.log(id)
};

from(myIterable).subscribe(observer);