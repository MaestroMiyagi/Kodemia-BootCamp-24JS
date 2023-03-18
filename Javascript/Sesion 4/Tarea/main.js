const step1 = () => console.log('El agua esta hirviendo');
const step2 = () => console.log('El sobre esta vertido');
const step3 = () => console.log('La mezcla esta enfriándose');
const step4 = () => console.log('Ya puedes comer tu gelatina!');

function gello(cb1, cb2, cb3, cb4) {
  setTimeout(cb1, 0);
  setTimeout(cb2, 5000);
  setTimeout(cb3, 10000);
  setTimeout(cb4, 15000);
}

gello(step1, step2, step3, step4);
