import {
    createCard
} from "./card.js";
import {
    getPeople
} from "./api.js";

let divContent = document.querySelector("#card-div")
let arrayPeople = []

let obtnerPersonas = async () => {
    let people = await getPeople()
    people.forEach(element => {
        arrayPeople.push(element)
        let {
            name,
            status,
            species,
            gender,
            origin,
            image,
            type
        } = element
        let cards = createCard(image, name, gender)
        divContent.appendChild(cards)
    });

    let anchors = document.querySelectorAll("#card-div button")

    anchors.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.target.disabled = "true"
            createPeople(arrayPeople[index])
        })
    })
}

obtnerPersonas()
