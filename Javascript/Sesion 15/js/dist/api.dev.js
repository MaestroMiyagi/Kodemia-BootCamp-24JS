"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeople = void 0;
var BASE_URL = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9";

var getPeople = function getPeople() {
  var response, data;
  return regeneratorRuntime.async(function getPeople$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL)));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getPeople = getPeople;