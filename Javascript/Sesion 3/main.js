/*Ejercicio 1*/

let numbers = [34, 12, 3, 8, 76];

function summ(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let add = numbers[i];
    result += add;
  }
  return result;
}

console.log(`El resultado de la suma del array es ${summ(numbers)}`);

/*Ejercicio 2*/

let names = ["Israel", "Charles", "David"];

function sortNames(names) {
  let names2 = names.sort();
  return names2;
}

console.log(`Los nombres ordenados alfabeticamente son ${sortNames(names)}`);

/*Ejercicio 3*/

function reverseNames(names) {
  let reNames = names.reverse();
  return reNames;
}

console.log(`Los nombres inversos son ${reverseNames(names)}`);

/*Ejercicio 4*/

let text = "La mejor forma de predecir el futuro es creándolo";

function wordCount(text) {
  return text.split(" ").length;
}

console.log(
  `El numero de palabras en la cadena de caracteres es ${wordCount(text)}`
);

/*Ejercicio 5*/
fullNames = [
  ["Israel", "Salinas"],
  ["Charles", "Silva"],
  ["David", "Moranchel"],
  ["Naomi", "López"],
  ["Rose", "Ortega"],
];

function nameInitials(fullNames) {
    let initials = [];
    for (let i = 0; i < fullNames.length; i++) {
      const nam = fullNames[i][0];
      const lastname = fullNames[i][1];
      initials.push(nam.charAt(0) + lastname.charAt(0));
    }
    return initials;
  }
  
  console.log(`El numero de palabras en la cadena de caracteres es ${nameInitials(fullNames)}`)