import api from "./api.js"

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
    return postId

}

selectPost()