import  {Observable, Observer, Subject, Subscription} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}

const intervalo$ = new Observable<number>(subscriber => {
    const intervalId = setInterval(
        () => subscriber.next(Math.random()
        ), 1000
    );

    return () => {
        clearInterval(intervalId);
        console.log('intervalo desctruido');
    }
});

// Subscribiendo directamente al observable intervalo$ ---> Emite un valor diferente para cada subscription
// const subscribe1 = intervalo$.subscribe(reandomNumber => console.log('subscribe1', reandomNumber ));
// const subscribe2 = intervalo$.subscribe(reandomNumber => console.log('subscribe2', reandomNumber));

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// //Subscribiendose al Subject subject$ ---> Multicasting: emite el mismo valor a todas las subscripciones
// const subscribe1 = subject$.subscribe(reandomNumber => console.log('subscribe1', reandomNumber ));
// const subscribe2 = subject$.subscribe(reandomNumber => console.log('subscribe2', reandomNumber));

//Subscribiendose al Subject subject$ y utilizando el observer ---> Multicasting: emite el mismo valor a todas las subscripciones
const subscribe1 = subject$.subscribe(observer);
const subscribe2 = subject$.subscribe(observer);


setTimeout(()=> {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3000);