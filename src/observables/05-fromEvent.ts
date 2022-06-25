import { fromEvent } from "rxjs";

const clickEvent = fromEvent<MouseEvent>(document, 'click');
const keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: valor => console.log('next value', valor.type, valor)
};

clickEvent.subscribe(observer);
clickEvent.subscribe(evento => console.log('x:', evento.clientX, 'y:',  evento.clientY));
clickEvent.subscribe(evento => console.log('x:', evento.x, 'y:',  evento.y));
clickEvent.subscribe(({x, y}) => console.log('x:', x, 'y:', y))

keyUpEvent.subscribe(observer);
keyUpEvent.subscribe(evento => console.log('key presed', evento.key));