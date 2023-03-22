"use strict";

var _api = require("./api.js");

var _cards = require("./cards.js");

var printCards = function printCards() {
  var cards;
  return regeneratorRuntime.async(function printCards$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api.textCards)());

        case 2:
          cards = _context.sent;
          console.log(cards);
          cards.forEach(function (item) {
            var id = item.id,
                title = item.title,
                body = item.body;
            var cards = (0, _cards.myCards)(id, title);
            document.getElementById("cardContainer").appendChild(cards);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

printCards();