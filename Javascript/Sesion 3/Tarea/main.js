/* Ejercicio 1 */
var phrase = `anita lava la tina`
/* const palindrome = (phrase) => phrase === phrase.split("").reverse().join(""); */
function palindrome(phrase) {
    phrase = phrase.replace(/[^a-zA-Z]/g, "").toLowerCase();
    console.log(phrase.replace(/[^a-zA-Z]/g, "").toLowerCase())
    return phrase === phrase.split("").reverse().join("");
} 
console.log(`${palindrome(phrase)}`)

phrase = 'A la grande le puse cuca'
console.log(`${palindrome(phrase)}`)

/* Ejercicio 2 */

/* 2.-Crear una función que recibe un string con varias palabras y cambia a mayúscula la primer letra de cada palabra
21:50
3.- Crear una función que recibe un string con multiples palabras y regresa únicamente la palabra mas larga en la oración
21:51
4.-Crear una función que recibe 2 argumentos una cadena de texto y un carácter, la función regresa un número que representa el número de veces que se repite el carácter en la cadena dada */