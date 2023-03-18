const productCard = (productName, productPrice, productImage, productDescription, productCategory) => {
    let principalDiv = document.createElement("div")
    principalDiv.classList.add("card","col-md-3", "mt-3")


    let principalImage = document.createElement("img")
    principalImage.classList.add("card-image-top", "m-2")
    principalImage.setAttribute("src", productImage)

    let secondaryDiv = document.createElement("div")
    secondaryDiv.classList.add("card-body")

    let title = document.createElement("h5")
    let textTitle = document.createTextNode(productName)
    title.classList.add("card-title")
    title.appendChild(textTitle)

    let content = document.createElement("p")
    content.classList.add("card-content")
    let textContent = document.createTextNode(productDescription)
    content.appendChild(textContent)

    let anchor = document.createElement("button")
    anchor.classList.add("btn", "btn-primary", "btn-lg")
    let anchorText = document.createTextNode(`Compra por tan solo $${productPrice}`)
    anchor.setAttribute("type", "button")
    anchor.appendChild(anchorText)

    let category = document.createElement("small")
    category.classList.add("text-succes")
    let categoryText = document.createTextNode(productCategory)
    category.appendChild(categoryText)

    secondaryDiv.append(title, content, anchor, category)
    principalDiv.append(principalImage, secondaryDiv)


    return principalDiv
}

export {
    productCard
}