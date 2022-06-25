import { asyncScheduler } from 'rxjs';

const greeting = () => console.log('HolaMundo');
const greetingSomeone = nombre => console.log(`Hola ${nombre}`);
const greetingSomeone2 = datos => console.log(`Hola ${datos.nombre} ${datos.apellido}`);

// De esta forma puede reemplazar al setTimeout(() => {}, 1000, state?)
asyncScheduler.schedule(greeting, 1000);

// El tercer argumento es el state: solo puede haber uno, pero puede ser un objeto
asyncScheduler.schedule(greetingSomeone, 2000, 'Laura');
asyncScheduler.schedule(greetingSomeone2, 2000, { nombre: 'Laura', apellido: 'Arcidiacono' });


// De esta forma puede reemplazar al setInterval((){}, 1000, state?)
const subscription = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1);
    console.log('state luego', state);
}, 3000, 0);

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);

// En lugar del setTimeout() para hacer el unsubscribe, puedo usar el mismo asyncScheduler:
asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);