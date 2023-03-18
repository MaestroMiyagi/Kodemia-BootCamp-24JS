import getProduct from "./api.js";
import {productCard} from "./productCard.js";

let carProducts = []

const printProducts = async () => {

    let response = await getProduct()

    let productList = response["result"]

    for (const key in productList) {
        console.log(key)
        let {
            title,
            price,
            descriprion,
            category,
            image
        } = productList[key]
    }
    let cards = productCard(title, price, descriprion, category, image)
    divContent.appendChild(cards)
    
}