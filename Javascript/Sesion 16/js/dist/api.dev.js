"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BASE_URL = "https://kodemia-24g-default-rtdb.firebaseio.com/products/.json";
var _default = {
  productInfo: function productInfo() {
    var response, data;
    return regeneratorRuntime.async(function productInfo$(_context) {
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
  }
};
exports["default"] = _default;