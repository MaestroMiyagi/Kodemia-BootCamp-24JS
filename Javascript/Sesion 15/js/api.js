const BASE_URL = `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9`

const getPeople = async () => {
    let response = await fetch(
        `${BASE_URL}`
    )
    let data = await response.json()
    return data
}

export { getPeople }
