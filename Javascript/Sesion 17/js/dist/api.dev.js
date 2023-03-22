"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var URL = "https://jsonplaceholder.typicode.com/posts";
var _default = {
  textCards: function textCards() {
    var response, data;
    return regeneratorRuntime.async(function textCards$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("".concat(URL)));

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
  },
  getPostById: function getPostById(id) {
    var response, data;
    return regeneratorRuntime.async(function getPostById$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch("".concat(URL).concat(id)));

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
/* const textCards = async () => {
    let response = await fetch(`${URL}`)
    let data = await response.json()
    return data
}

getPostById = async (id) => {
    let response = await fetch(`${URL}${id}`)
    let data = await response.json()
    return data
}

export {textCards, getPostById} */

exports["default"] = _default;