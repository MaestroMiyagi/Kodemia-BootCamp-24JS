const printCar = (carArray) => {
    const carTable = document.createElement("table");
    carTable.classList.add("table", "caption-top", "bg-light", "rounded", "mt-2" );
    const carTableHead = document.createElement("thead");
    const carTableHeadRow = document.createElement("tr");
    const carTableHeadQuantity = document.createElement("th");
    carTableHeadQuantity.setAttribute("scope", "col");
    carTableHeadQuantity.innerHTML = "Cantidad";
    const carTableHeadName = document.createElement("th");
    carTableHeadName.setAttribute("scope", "col");
    carTableHeadName.innerHTML = "Nombre";
    const carTableHeadPrice = document.createElement("th");
    carTableHeadPrice.setAttribute("scope", "col");
    carTableHeadPrice.innerHTML = "Precio";
    const carTableHeadTotal = document.createElement("th");
    carTableHeadTotal.setAttribute("scope", "col");
    carTableHeadTotal.innerHTML = "Total";
    carTableHeadRow.appendChild(carTableHeadQuantity);
    carTableHeadRow.appendChild(carTableHeadName);
    carTableHeadRow.appendChild(carTableHeadPrice);
    carTableHeadRow.appendChild(carTableHeadTotal);
    carTableHead.appendChild(carTableHeadRow);
    carTable.appendChild(carTableHead);
    const carTableBody = document.createElement("tbody");
    const products = {};

    carArray.forEach((product) => {
        const {
            title,
            price,
            image
        } = product;
        if (products[title]) {
            products[title].cantidad++;
        } else {
            products[title] = {
                title,
                price,
                image,
                cantidad: 1
            };
        }
    });

    Object.values(products).forEach((product) => {
        const {
            title,
            price,
            image,
            cantidad
        } = product;
        const productRow = document.createElement("tr");
        const productQuantity = document.createElement("td");
        productQuantity.innerHTML = cantidad;
        const productName = document.createElement("td");
        productName.innerHTML = title;
        const productPrice = document.createElement("td");
        productPrice.innerHTML = `$${Math.round(price)}`;
        const productTotal = document.createElement("td");
        productTotal.innerHTML = `$${Math.round(price * cantidad)}`;
        productRow.append(productQuantity, productName, productPrice, productTotal);
        carTableBody.append(productRow);
    });
    carTable.append(carTableBody);
    console.log(carTable)
    return carTable;
};

export {
    printCar
}

