koders = [{
    name: "Isra",
    birthDate: "09/27/1989"
}, {
    name: "Rodolfo",
    birthDate: "11/27/1998"
}, {
    name: "Kim",
    birthDate: "11/15/1996"
}, {
    name: "Iyari",
    birthDate: "09/26/1997"
}, {
    name: "Manu",
    birthDate: "11/21/1986"
}, {
    name: "Antonio",
    birthDate: "07/23/1993"
}, {
    name: "Rafa",
    birthDate: "03/11/1997"
}, {
    name: "Eddie",
    birthDate: "11/05/1997"
}, {
    name: "Jesús",
    birthDate: "11/04/2000"
}, {
    name: "Mar",
    birthDate: "12/18/1994"
}, {
    name: "Roberto",
    birthDate: "01/14/1985"
}, {
    name: "Javi",
    birthDate: "12/07/1993"
}, {
    name: "Mario",
    birthDate: "11/02/1999"
}]

const getAgeDifference = (koders) => {
    let birthYears = koders.map((koder) => parseInt(koder.birthDate.split("/")[2]));
    let ageDifference = Math.max(...birthYears) - Math.min(...birthYears);
    return ageDifference;
  }


console.log(`La diferencia de años entre el koder más verde y el más experimentado es de ${getAgeDifference(koders)} años`);

/* Usando la lista de nombres y fechas de nacimiento de los koders, se requiere obtener una nueva lista que 
contenga el nombre del koder y el tiempo que falta para su cumpleaños (en días y meses), o en caso de que su 
cumpleaños ya haya ocurrido, el tiempo en días y meses que ha pasado desde entonces */

const birthdayTime = () => {

} 

/* const differenceBirth = (arrayBirth) => {
    let datesMiliseconds = arrayBirth.map((date) => parseInt(date.birthDate.split('/')[2]))
    let ageDifferences = Math.max(...datesMiliseconds) - Math.min(...datesMiliseconds)
    return ageDifferences
}

console.log(`La diferencia de años entre el koder más verde y el más experimentado es de ${differenceBirth(koders)} años`); */

