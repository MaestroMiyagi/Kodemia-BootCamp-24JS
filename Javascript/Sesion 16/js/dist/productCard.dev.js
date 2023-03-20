"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productCard = void 0;

var productCard = function productCard(productName, productPrice, productImage, productDescription, productCategory, productId, buttonFunction) {
  var principalDiv = document.createElement("div");
  principalDiv.classList.add("card", "col-3", "mt-3", "mb-5", "ms-5", "border-dark");
  var principalImage = document.createElement("img");
  principalImage.classList.add("card-image-top", "m-2");
  principalImage.setAttribute("src", productImage);
  var secondaryDiv = document.createElement("div");
  secondaryDiv.classList.add("card-body");
  var title = document.createElement("h5");
  var textTitle = document.createTextNode(productName);
  title.classList.add("card-title");
  title.appendChild(textTitle);
  var content = document.createElement("p");
  content.classList.add("card-content");
  var textContent = document.createTextNode(productDescription);
  content.appendChild(textContent);
  var anchor = document.createElement("button");
  anchor.classList.add("btn", "btn-primary", "btn-lg");
  var anchorText = document.createTextNode("Compra por tan solo $".concat(Math.round(productPrice)));
  anchor.setAttribute("type", "button");
  anchor.appendChild(anchorText);
  anchor.addEventListener("click", function () {
    return buttonFunction(productId);
  });
  var category = document.createElement("small");
  category.classList.add("text-succes");
  var categoryText = document.createTextNode(productCategory);
  category.appendChild(categoryText);
  secondaryDiv.append(title, content, anchor, category);
  principalDiv.append(principalImage, secondaryDiv);
  return principalDiv;
};

exports.productCard = productCard;