import cardModule from './cardModule.js';

// Crear un elemento div con la clase "container"
let container = document.createElement('div');
container.className = 'container';

// Crear un elemento div con la clase "row"
let row = document.createElement('div');
row.className = 'row';

// Llamar a la función crearCard del módulo con los datos que quieras para cada card
let card1 = cardModule.crearCard('Card 1', 'img1.jpg', 'Este es el texto de la primera card', {url: '#', texto: 'Ver más'});
let card2 = cardModule.crearCard('Card 2', 'img2.jpg', 'Este es el texto de la segunda card', {url: '#', texto: 'Ver más'});
let card3 = cardModule.crearCard('Card 3', 'img3.jpg', 'Este es el texto de la tercera card', {url: '#', texto: 'Ver más'});

// Agregar las cards al elemento div con la clase "row"
row.appendChild(card1);
row.appendChild(card2);
row.appendChild(card3);

// Agregar el elemento div con la clase "container" al documento
document.body.appendChild(container);