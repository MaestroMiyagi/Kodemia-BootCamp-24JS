/* let data = {}

const getKoders = async () => {
    let response = await fetch('https://kodemia-24js-default-rtdb.firebaseio.com/.json')
    let data = await response.json()
    return data
}

getKoders().then(data => {
    console.log(data)
})

const printKoders = () => {
    getKoders().then(koders => {
        document.write(JSON.stringify(koders))
    })
}

printKoders()
 */
/* const getKoders = () => {
    fetch('https://kodemia-24js-default-rtdb.firebaseio.com/.json')
    .then((response) => response.json())
    .then((json) => {
    data = json
})
console.log(data)
}
 */
/* getKoders() */


/* const printData = (data) =>{
    document.write(JSON.stringify(data))
} */


/* fetch('https://kodemia-24js-default-rtdb.firebaseio.com/.json')
  .then(response => response.json())
  .then(data => {
    let nameKoder = data.KODERS.koder1.name;
    document.getElementById("name-koder").innerHTML = nameKoder;
  }); 


  const getKoders = async () => {
    let koders = getKoders()
    for(key in koders){
        console.log(key)
        console.log(koders[key])
        let heading = document.createElement("h1")
        body.appendChild(heading)
    }
  } */

let kodersKeyArray = Object.keys(koders)
kodersKeyArray.forEach((key) => {
    let {
        name
    } = koders[key]
    console.log(key)
    console.log(koders[key])
    let heading = document.createElement("h1")
    heading.innerText = name
    document
})

const deleteKoder = async (key) => {
    let response = await fetch(`https://kodemia-24js-default-rtdb.firebaseio.com/koders/${koderKey}/.json`, {
        method: "DELETE"
    })
    let data = await response.json()
    return data
}

const createKoder = async (koderObject) => {
    let response = await fetch(`https://kodemia-24js-default-rtdb.firebaseio.com/koders/.json`, {
        method: "POST",
        body: JSON.stringify(koderObject)
    })
    let data = await response.json()
    console.log(data)
    return data
}


{
    name:"Israel"
    lastname:"Salinas"
}