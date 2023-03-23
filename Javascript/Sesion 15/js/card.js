let createCard = (imgSrc,cardTitle,pContent) => {
    let principalDiv = document.createElement("div")
    principalDiv.classList.add("card","col-sm-4","mt-3")
    
    let image = document.createElement("img")
    image.classList.add("card-img-top")
    image.setAttribute("src",imgSrc)

    let secondaryDiv = document.createElement("div")
    secondaryDiv.classList.add("card-body")

    let title = document.createElement("h5")
    let textTitle = document.createTextNode(cardTitle)
    title.classList.add("card-title")
    title.appendChild(textTitle)

    let content = document.createElement("p")
    content.classList.add("card-text")
    let textContent = document.createTextNode(`Gender: ${pContent}`)
    content.appendChild(textContent)

    secondaryDiv.append(title,content)
    principalDiv.append(image,secondaryDiv)

    return principalDiv
}

export { createCard }