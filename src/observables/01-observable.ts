import  {Observable, Observer} from 'rxjs';

const observer: Observer<string> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}

const observable$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next(' mundo!');

    // Test: Provocar error
    // const generateError = undefined;
    // generateError.nombre = 'Lau';

    subscriber.complete();
});

observable$.subscribe(observer);

// observable$.subscribe(
//     valor => console.log(valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );
