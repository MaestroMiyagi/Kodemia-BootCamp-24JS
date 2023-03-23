const step1 = () => console.log('El agua esta hirviendo')
const step2 = () => console.log('El sobre esta vertido')
const step3 = () => console.log('La mezcla esta enfriándose')
const step4 = () => console.log('Ya puedes comer tu gelatina!')

function gello (cb1, cb2, cb3, cb4) {
    cb1()
    cb2()
    cb3()
    cb4()
}

gello(step1, step2, step3, step4) 

/* Hacer una función que se salude o se despida de una persona dependiendo si es de dia o de noche */

function greeting(time, names, greetingCallback, farewellCallback) {
  if (time === 'dia') {
    greetingCallback(names);
    return;
  } if (time === 'noche'){
    farewellCallback(names);
    return;
  }
  else{
    return
  }
}

const greetingDay = names => console.log(`Hola ${names}`);

const secondGreetingDay = names => console.log(`salut ${names}`)

const greetingNight = names => console.log(`Adios ${names}`);
  
greeting('noche', 'javier', greetingDay,greetingNight)
greeting('dia', 'javier', secondGreetingDay,greetingNight)