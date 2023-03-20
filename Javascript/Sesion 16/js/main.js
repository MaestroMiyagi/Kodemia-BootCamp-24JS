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
    console.log(response)
    let product = response.find((product) => product.id === productId)
    product ? carProducts.push(product) : null
    printCar(carProducts)
    total(carProducts)
    console.log(carProducts)

}

const printCar = (carArray) => {
    carArray.forEach((product) => {
      let { title, price, image } = product;
      let carCard = productCard(title, price, image);
      document.getElementById("cart-wrapper").appendChild(carCard);
    });
  };
  
  const total = (payArray) => {
    payArray.reduce((acum, current) => {
      let totalPrice = (acum += current.price);
      console.log(totalPrice);
      return totalPrice;
    });
  };

printProducts()