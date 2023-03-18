"use strict";

var _api = _interopRequireDefault(require("./api.js"));

var _productCard = require("./productCard.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("todo ok");
var carProducts = [];

var printProducts = function printProducts() {
  var response;
  return regeneratorRuntime.async(function printProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_api["default"].productInfo());

        case 2:
          response = _context.sent;
          console.log(response);
          response.forEach(function (product) {
            var title = product.title,
                price = product.price,
                description = product.description,
                category = product.category,
                image = product.image;
            console.log(product);
            var cards = (0, _productCard.productCard)(title, price, image, description, category);
            document.getElementById("product-wrapper").appendChild(cards);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getProduct = function getProduct() {
  var response = _api["default"].productInfo();

  response.find(product);
};

printProducts();