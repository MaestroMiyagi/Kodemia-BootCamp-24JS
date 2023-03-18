/* Ejercicio 1 Crear una funcion que reciba un nombre y nos entregue un nuevo string con la letra inicial y la letra final de ese nombre*/

let names = "Pablo"

const getNewString = names => `El nuevo string usando ${names} es ${names.charAt()}${names.charAt(names.length-1)}`

console.log(getNewString(names))

/* Ejercicio 2 Crear una función que me devuelva el resultado de la suma de 2 números*/

let add1 = 4
let add2 = 2

function addition(add1,add2){
    return add1+add2
}

console.log(`El resultado de la suma entre ${add1} y ${add2} es ${addition(add1,add2)}`)

/* Ejercicio 3 Crear una función que me devuelva el resultado de la resta de 2 números*/

let subt1 = 9
let subt2 = 4

function substraction(subt1,subt2){
    return subt1-subt2
}

console.log(`El resultado de la resta entre ${subt1} y ${subt2} es ${substraction(subt1,subt2)}`)

/* Ejercicio 4 Crear una función que me devuelva el resultado de la multiplicación de 2 números*/

let mult1 = 3
let mult2 = 5

function multiplication(mult1,mult2){
    return mult1*mult2
}

console.log(`El resultado de la multiplicación ${mult1} y ${mult2} es ${multiplication(mult1,mult2)}`)

/* Ejercicio 5 Crear una función que me devuelva el resultado de la división de 2 números*/

let div1 = 3
let div2 = 0

function division(div1,div2){
    if (div2 == 0) {
        return 'nulo'
    } else {
        return div1/div2
    }
}

console.log(`El resultado de la division entre ${div1} y ${div2} es ${division(div1,div2)}`)

/* Crear una fución que reciba el nombre de alguna operación aritmética, y 2 números, debe devolver el resultado de la operación aritmética indicada, entre los dos números recibidos*/

let num1 = 2
let num2 = 4
let operation = 'multiplicacion'

function math(num1,num2,operation){
    let result
    switch (operation) {
        case 'suma':
            result = num1 + num2
            break;
        case 'resta':
            result = num1 - num2
            break;
        case 'multiplicacion':
            result = num1 * num2
            break;
        case 'division':
            if (num2 == 0) {
                result = `nulo`
            } else {
                result = num1 / num2
            }
            break;
        default:
            result = `No es una operación aritmética`
            break;
    }
    return result
}

console.log(`El resultado de la operacion ${operation} entre el numero ${num1} y ${num2} es ${math(num1,num2,operation)}`)