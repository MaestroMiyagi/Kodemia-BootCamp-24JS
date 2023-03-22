import {textCards} from './api.js'
import { myCards } from './cards.js'

/*let api =  {
    textCards: async () => {
        let response = await fetch(`${URL}`)
        let data = await response.json()
        return data
    },
    getPostById: async (id) => {
        let response = await fetch(`${URL}${id}`)
        let data = await response.json()
        return data
    }
}*/

const printCards = async () => {
    let cards = await textCards()
    console.log(cards)
    cards.forEach( item => {
        let{
            id,
            title,
            body
        } = item
        let cards = myCards(id, title)
        document.getElementById("cardContainer").appendChild(cards)
    })

}

printCards()