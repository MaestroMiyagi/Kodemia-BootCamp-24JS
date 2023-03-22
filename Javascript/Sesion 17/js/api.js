const URL = `https://jsonplaceholder.typicode.com/posts`

export default {
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
}

/* const textCards = async () => {
    let response = await fetch(`${URL}`)
    let data = await response.json()
    return data
}

getPostById = async (id) => {
    let response = await fetch(`${URL}${id}`)
    let data = await response.json()
    return data
}

export {textCards, getPostById} */