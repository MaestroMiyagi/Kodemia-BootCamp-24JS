"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printCar = void 0;

var printCar = function printCar(carArray) {
  var carTable = document.createElement("table");
  carTable.classList.add("table", "caption-top");
  var carTableHead = document.createElement("thead");
  var carTableHeadRow = document.createElement("tr");
  var carTableHeadQuantity = document.createElement("th");
  carTableHeadQuantity.setAttribute("scope", "col");
  carTableHeadQuantity.innerHTML = "Cantidad";
  var carTableHeadName = document.createElement("th");
  carTableHeadName.setAttribute("scope", "col");
  carTableHeadName.innerHTML = "Nombre";
  var carTableHeadPrice = document.createElement("th");
  carTableHeadPrice.setAttribute("scope", "col");
  carTableHeadPrice.innerHTML = "Precio";
  var carTableHeadTotal = document.createElement("th");
  carTableHeadTotal.setAttribute("scope", "col");
  carTableHeadTotal.innerHTML = "Total";
  carTableHeadRow.appendChild(carTableHeadQuantity);
  carTableHeadRow.appendChild(carTableHeadName);
  carTableHeadRow.appendChild(carTableHeadPrice);
  carTableHeadRow.appendChild(carTableHeadTotal);
  carTableHead.appendChild(carTableHeadRow);
  carTable.appendChild(carTableHead);
  var carTableBody = document.createElement("tbody");
  var products = {};
  carArray.forEach(function (product) {
    var title = product.title,
        price = product.price,
        image = product.image;

    if (products[title]) {
      products[title].cantidad++;
    } else {
      products[title] = {
        title: title,
        price: price,
        image: image,
        cantidad: 1
      };
    }
  });
  Object.values(products).forEach(function (product) {
    var title = product.title,
        price = product.price,
        image = product.image,
        cantidad = product.cantidad;
    var productRow = document.createElement("tr");
    var productQuantity = document.createElement("td");
    productQuantity.innerHTML = cantidad;
    var productName = document.createElement("td");
    productName.innerHTML = title;
    var productPrice = document.createElement("td");
    productPrice.innerHTML = "$".concat(price);
    var productTotal = document.createElement("td");
    productTotal.innerHTML = "$".concat(price * cantidad);
    productRow.append(productQuantity, productName, productPrice, productTotal);
    carTableBody.append(productRow);
  });
  carTable.append(carTableBody);
  console.log(carTable);
  return carTable;
};

exports.printCar = printCar;