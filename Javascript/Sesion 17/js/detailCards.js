import api from "./api.js"
import {myDetailCards} from "./cards.js"

/*let post =  {
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

let urlParams = new URLSearchParams (window.location.search);
let id = urlParams.get("id")


const selectPost = async () => {
    let postId = await api.getPostById(id)
    console.log("Hola")
    postId.forEach(item => {
        let {
            id,
            title,
            body
        } = item
        let cards = myDetailCards(id, title, body)
        document.getElementById("cardContainer").appendChild(cards)
    })

}
