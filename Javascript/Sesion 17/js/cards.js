const myCards = (id, title, body) => {
    let card = document.createElement('div')
    card.classList.add('card')

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h1')
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = title

    let cardButton = document.createElement('a')
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.setAttribute("href", `./cardDetail.html?id=${id}`)
    let buttonText = document.createTextNode("Ir a detalles")
    cardButton.appendChild(buttonText)

    cardBody.append(cardTitle, cardButton)
    card.append(cardBody)
    return card
}

const myDetailCards = (id, title, body) => {
    let card = document.createElement('div')
    card.classList.add('card')

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h1')
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = title

    let cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerHTML = body

    cardBody.append(cardTitle)
    card.append(cardBody)
    return card
}

export {
    myCards,
    myDetailCards
}