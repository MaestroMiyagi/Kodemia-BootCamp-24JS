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
function capitalLetters(phrase) {
    return phrase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(`${capitalLetters(phrase)}`)

/* Ejercicio 3 */
function longest(phrase) {
    const words = phrase.split(' ');
    let longboi = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longboi.length) {
            longboi = words[i];
        }
    }
    return longboi;
}
console.log(`${longest(phrase)}`)

/* Ejercicio 4 */
