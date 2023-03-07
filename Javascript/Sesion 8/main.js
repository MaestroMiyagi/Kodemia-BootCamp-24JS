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
    let birthYears = koders.map((koder) => parseInt(koder.birthDate.split('/')[2]));
    let ageDifference = Math.max(...birthYears) -Math.min(...birthYears);
    return ageDifference;
  }


console.log(`La diferencia de años entre el koder más verde y el más experimentado es de ${getAgeDifference(koders)} años`);