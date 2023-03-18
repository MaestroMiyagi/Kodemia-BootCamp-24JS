"use strict";

var _api = _interopRequireDefault(require("./api.js"));

var _productCard = require("./productCard.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var carProducts = [];

var printProducts = function printProducts() {
  var response, productList, key, _productList$key, _title, _price, _descriprion, _category, _image, cards;

  return regeneratorRuntime.async(function printProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api["default"])());

        case 2:
          response = _context.sent;
          productList = response["result"];

          for (key in productList) {
            console.log(key);
            _productList$key = productList[key], _title = _productList$key.title, _price = _productList$key.price, _descriprion = _productList$key.descriprion, _category = _productList$key.category, _image = _productList$key.image;
          }

          cards = (0, _productCard.productCard)(title, price, descriprion, category, image);
          divContent.appendChild(cards);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};