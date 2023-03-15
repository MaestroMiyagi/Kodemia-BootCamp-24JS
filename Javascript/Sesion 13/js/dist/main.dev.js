"use strict";

/* let data = {}

const getKoders = async () => {
    let response = await fetch('https://kodemia-24js-default-rtdb.firebaseio.com/.json')
    let data = await response.json()
    return data
}

getKoders().then(data => {
    console.log(data)
})

const printKoders = () => {
    getKoders().then(koders => {
        document.write(JSON.stringify(koders))
    })
}

printKoders()
 */

/* const getKoders = () => {
    fetch('https://kodemia-24js-default-rtdb.firebaseio.com/.json')
    .then((response) => response.json())
    .then((json) => {
    data = json
})
console.log(data)
}
 */

/* getKoders() */

/* const printData = (data) =>{
    document.write(JSON.stringify(data))
} */

/* fetch('https://kodemia-24js-default-rtdb.firebaseio.com/.json')
  .then(response => response.json())
  .then(data => {
    let nameKoder = data.KODERS.koder1.name;
    document.getElementById("name-koder").innerHTML = nameKoder;
  }); 


  const getKoders = async () => {
    let koders = getKoders()
    for(key in koders){
        console.log(key)
        console.log(koders[key])
        let heading = document.createElement("h1")
        body.appendChild(heading)
    }
  } */
var kodersKeyArray = Object.keys(koders);
kodersKeyArray.forEach(function (key) {
  var name = koders[key].name;
  console.log(key);
  console.log(koders[key]);
  var heading = document.createElement("h1");
  heading.innerText = name;
  document;
});

var deleteKoder = function deleteKoder(key) {
  var response, data;
  return regeneratorRuntime.async(function deleteKoder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://kodemia-24js-default-rtdb.firebaseio.com/koders/".concat(koderKey, "/.json"), {
            method: "DELETE"
          }));

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

var createKoder = function createKoder(koderObject) {
  var response, data;
  return regeneratorRuntime.async(function createKoder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://kodemia-24js-default-rtdb.firebaseio.com/koders/.json", {
            method: "POST",
            body: JSON.stringify(koderObject)
          }));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context2.sent;
          console.log(data);
          return _context2.abrupt("return", data);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

{
  name: "Israel";

  lastname: "Salinas";
}