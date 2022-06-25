import { interval, timer } from 'rxjs';

const observer = {
    next: valor => console.log('next', valor),
    complete: () => console.log('complete')
};

// Interval es a asincrono por naturaleza
const interval$ = interval(1000);

console.log('inicio');
interval$.subscribe(observer);
console.log('fin');

// Timer
const timer$ = timer(2000);

console.log('inicio');
timer$.subscribe(observer);
console.log('fin');

// El timer va a iniciar al cabo de 2 segundos, pero contnuará emitiendo valores cada 1 segundo
const timerPlusInterval$ = timer(2000, 1000);

console.log('inicio');
timerPlusInterval$.subscribe(observer);
console.log('fin');

// Para determinar un tiempo variable de emision
const mytimeToTimer = new Date();
mytimeToTimer.setSeconds(mytimeToTimer.getSeconds() + 5);
const timerWithVariable$ = timer(mytimeToTimer);

console.log('inicio');
timerWithVariable$.subscribe(observer);
console.log('fin');