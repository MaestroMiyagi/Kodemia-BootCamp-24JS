import getInfo from "./api.js";
import {productCard} from "./productCard.js";

console.log( "todo ok")
let carProducts = []

const printProducts = async () => {

    let response = await getInfo.productInfo()
    console.log( response)

    response.forEach(product => {
        let {
            title,
            price,
            descriprion,
            category,
            image
        } = product
        console.log( product)
        let cards = productCard(title, price, descriprion, category, image)
        document.getElementById("product-wrapper").appendChild(cards)
    });
    

    
}

printProducts()