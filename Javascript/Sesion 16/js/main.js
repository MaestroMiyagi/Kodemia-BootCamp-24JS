import getInfo from "./api.js";
import {
    productCard
} from "./productCard.js";

console.log("todo ok")
let carProducts = []

const printProducts = async () => {

    let response = await getInfo.productInfo()
    console.log(response)

    response.forEach(product => {
        let {
            title,
            price,
            description,
            category,
            image
        } = product
        console.log(product)
        let cards = productCard(title, price, image, description, category)
        document.getElementById("product-wrapper").appendChild(cards)
    });
}

const getProduct = () => {
    let response = getInfo.productInfo()
    response.find((product) => )
}

printProducts()