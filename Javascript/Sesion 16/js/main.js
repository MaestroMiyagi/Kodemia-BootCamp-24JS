import getInfo from "./api.js";
import {
    productCard
} from "./productCard.js";
import {
    printCar
} from "./cart.js";

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
            image,
            id
        } = product
        console.log(product)
        let cards = productCard(title, price, image, description, category, id, getProduct)
        document.getElementById("product-wrapper").appendChild(cards)
    });
}

const getProduct = async (productId) => {
    let response = await getInfo.productInfo()
    let product = response.find((product) => product.id === productId)
    product ? carProducts.push(product) : null
    const carTable = printCar(carProducts);
    document.querySelector("#cart-wrapper").innerHTML = "";
    document.querySelector("#cart-wrapper").appendChild(carTable);
    total(carProducts)
}

const total = (payArray) => {
    const totalPrice = payArray.reduce((acum, current) => acum + current.price, 0);
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "4");
    totalCell.innerHTML = `Total: $${totalPrice}`;
    totalRow.appendChild(totalCell);
    document.querySelector("#cart-wrapper").appendChild(totalRow);
};

printProducts()