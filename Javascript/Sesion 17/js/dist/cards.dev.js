"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myDetailCards = exports.myCards = void 0;

var myCards = function myCards(id, title, body) {
  var card = document.createElement('div');
  card.classList.add('card');
  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  var cardTitle = document.createElement('h1');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = title;
  var cardButton = document.createElement('a');
  cardButton.classList.add('btn', 'btn-primary');
  cardButton.setAttribute("href", "./cardDetail.html?id=".concat(id));
  var buttonText = document.createTextNode("Ir a detalles");
  cardButton.appendChild(buttonText);
  cardBody.append(cardTitle, cardButton);
  card.append(cardBody);
  return card;
};

exports.myCards = myCards;

var myDetailCards = function myDetailCards(id, title, body) {
  var card = document.createElement('div');
  card.classList.add('card');
  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  var cardTitle = document.createElement('h1');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = title;
  var cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = body;
  cardBody.append(cardTitle);
  card.append(cardBody);
  return card;
};

exports.myDetailCards = myDetailCards;