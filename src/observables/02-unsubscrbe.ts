import  {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}

const intervalo$ = new Observable<number>( subscriber => {
    //Crear contador:
    let counter = 0;
    const interval = setInterval(() => {
        counter++;
        // Indico cuál va a ser el valor que emita el observable con el NEXT
        subscriber.next(counter);
    }, 1000);

    setInterval(() => {
        subscriber.complete();
    }, 2500);


    return () => {
        clearInterval(interval);
        console.log('Detención del intervalo');
    }
});
// Me subscribo a los valores emitidos por el observable intervalo$
const subscription = intervalo$.subscribe(observer)

//Establezco un setTimeOut, cuando pasen 3 segundos, hago un unsubscribe del observable
setTimeout( () => {
    subscription.unsubscribe()
}, 3000);