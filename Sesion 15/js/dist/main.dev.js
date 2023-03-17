"use strict";

var _card = require("./card.js");

var _api = require("./api.js");

var divContent = document.querySelector("#card-div");
var arrayPeople = [];

var obtnerPersonas = function obtnerPersonas() {
  var people, anchors;
  return regeneratorRuntime.async(function obtnerPersonas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api.getPeople)());

        case 2:
          people = _context.sent;
          people.forEach(function (element) {
            arrayPeople.push(element);
            var name = element.name,
                status = element.status,
                species = element.species,
                gender = element.gender,
                origin = element.origin,
                image = element.image,
                type = element.type;
            var cards = (0, _card.createCard)(image, name, gender);
            divContent.appendChild(cards);
          });
          anchors = document.querySelectorAll("#card-div button");
          anchors.forEach(function (item, index) {
            item.addEventListener("click", function (event) {
              event.target.disabled = "true";
              createPeople(arrayPeople[index]);
            });
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

obtnerPersonas();