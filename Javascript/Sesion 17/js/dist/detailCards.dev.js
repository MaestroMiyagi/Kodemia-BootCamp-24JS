"use strict";

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*let post =  {
    textCards: async () => {
        let response = await fetch(`${URL}`)
        let data = await response.json()
        return data
    },
    getPostById: async (id) => {
        let response = await fetch(`${URL}${id}`)
        let data = await response.json()
        return data
    }
}*/
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
          return _context.abrupt("return", postId);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

selectPost();