"use strict";

var _api = _interopRequireDefault(require("./api.js"));

var _cards = require("./cards.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get("id");

var selectPost = function selectPost() {
  var postId;
  return regeneratorRuntime.async(function selectPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_api["default"].getPostById(id));

        case 2:
          postId = _context.sent;
          console.log("Hola");
          postId.forEach(function (item) {
            var id = item.id,
                title = item.title,
                body = item.body;
            var cards = (0, _cards.myDetailCards)(id, title, body);
            document.getElementById("cardContainer").appendChild(cards);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

selectPost();