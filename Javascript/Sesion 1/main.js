/* Programa 1 Crear un programa que me muestre el mayor de dos números*/
let num1 = 4;
let num2 = 8;

if (num1 > num2) {
  console.log(num1);
} else if (num1 < num2) {
  console.log(num2);
} else {
  console.log("Los numero son iguales");
}

/* Programa 2 Crear un programa que me muestre el más largo de dos strings*/
let string1 = "Hola";
let string2 = "Adios";

let length1= string1.length;
let length2= string2.length;

if (length1 > length2) {
  console.log(string1);
} else if (length1 < length2) {
  console.log(string2);
} else {
  console.log("Las cadenas de caracteres tienen la misma longitud");
}

/* Programa 3 Crear un programa que me diga si un número es divisible entre otro número*/
let num3 = 20;
let num4 = 3;
res = num3 % num4;
if (res != 0) {
    console.log("El número " + num3 + " no es divisible entre " + num4)
} else {
    console.log("El número " + num3 + " es divisible entre " + num4)
}

/* Programa 4 */
let stringUltimo = "otorrinolaringologos";
let length = stringUltimo.length
if (length >= 10 && length % 2 == 0)  {
    console.log("El texto es largo y sus caracteres son pares")
} else if (length < 10 && length % 2 == 0) {
    console.log("El texto es corto y sus caracteres son pares")
} else {
    console.log("El texto no cumple con alguna especificación")
}

