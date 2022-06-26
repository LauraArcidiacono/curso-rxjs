import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const text = document.createElement('div');

text.innerHTML = `
No te rindas
<br><br>
No te rindas, aun estas a tiempo<br>
de alcanzar y comenzar de nuevo,<br>
aceptar tus sombras, enterrar tus miedos,<br>
liberar el lastre, retomar el vuelo.
<br><br>
No te rindas que la vida es eso,<br>
continuar el viaje,<br>
perseguir tus sueños,<br>
destrabar el tiempo,<br>
correr los escombros y destapar el cielo.
<br><br>
No te rindas, por favor no cedas,<br>
aunque el frio queme,<br>
aunque el miedo muerda,<br>
aunque el sol se esconda y se calle el viento,<br>
aun hay fuego en tu alma,<br>
aun hay vida en tus sueños,<br>
porque la vida es tuya y tuyo tambien el deseo,<br>
porque lo has querido y porque te quiero.
<br><br>
Porque existe el vino y el amor, es cierto,<br>
porque no hay heridas que no cure el tiempo,<br>
abrir las puertas quitar los cerrojos,<br>
abandonar las murallas que te protegieron.
<br><br>
Vivir la vida y aceptar el reto,<br>
recuperar la risa, ensayar el canto,<br>
bajar la guardia y extender las manos,<br>
desplegar las alas e intentar de nuevo,<br>
celebrar la vida y retomar los cielos,
<br><br>
No te rindas por favor no cedas,<br>
aunque el frio queme,<br>
aunque el miedo muerda,<br>
aunque el sol se ponga y se calle el viento,<br>
aun hay fuego en tu alma,<br>
aun hay vida en tus sueños,<br>
porque cada dia es un comienzo,<br>
porque esta es la hora y el mejor momento,<br>
porque no estas sola,<br>
porque yo te quiero.
<br><br>
<br><br>
Te quiero
<br><br>
Tus manos son mi caricia<br>
Mis acordes cotidiano<br>
Te quiero porque tus manos<br>
Trabajan por la justicia.<br><br>
Si te quiero es porque sos<br>
Mi amor, mi cómplice, y todo<br>
Y en la calle codo a codo<br>
Somos mucho más que dos<br><br>
Tus ojos son mi conjuro<br>
Contra la mala jornada<br>
Te quiero por tu mirada<br>
Que mira y siembra futuro<br><br>
Tu boca que es tuya y mía<br>
Tu boca no se equivoca<br>
Te quiero por que tu boca<br>
Sabe gritar rebeldía<br><br>
Si te quiero es porque sos<br>
Mi amor mi cómplice y todo<br>
Y en la calle codo a codo<br>
Somos mucho más que dos<br><br>
Y por tu rostro sincero<br>
Y tu paso vagabundo<br>
Y tu llanto por el mundo<br>
Porque sos pueblo te quiero<br><br>
Y porque amor no es aurora<br>
Ni cándida moraleja<br>
Y porque somos pareja<br>
Que sabe que no está sola<br><br>
Te quiero en mi paraíso<br>
Es decir, que en mi país<br>
La gente vive feliz<br>
Aunque no tenga permiso<br><br>
Si te quiero es por que sos<br>
Mi amor, mi cómplice y todo<br>
Y en la calle codo a codo<br>
Somos mucho más que dos<br>
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

const calculateScrollpercentage = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100
};

const progress$ = scroll$.pipe(
    map(event => calculateScrollpercentage(event)),
    tap(console.log)
);

progress$.subscribe( percentage => {
    progressBar.style.width = `${percentage}%`;
});