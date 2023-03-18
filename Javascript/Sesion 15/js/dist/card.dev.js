"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCard = void 0;

var createCard = function createCard(imgSrc, cardTitle, pContent) {
  var principalDiv = document.createElement("div");
  principalDiv.classList.add("card", "col-sm-4", "mt-3");
  var image = document.createElement("img");
  image.classList.add("card-img-top");
  image.setAttribute("src", imgSrc);
  var secondaryDiv = document.createElement("div");
  secondaryDiv.classList.add("card-body");
  var title = document.createElement("h5");
  var textTitle = document.createTextNode(cardTitle);
  title.classList.add("card-title");
  title.appendChild(textTitle);
  var content = document.createElement("p");
  content.classList.add("card-text");
  var textContent = document.createTextNode("Gender: ".concat(pContent));
  content.appendChild(textContent);
  secondaryDiv.append(title, content);
  principalDiv.append(image, secondaryDiv);
  return principalDiv;
};

exports.createCard = createCard;