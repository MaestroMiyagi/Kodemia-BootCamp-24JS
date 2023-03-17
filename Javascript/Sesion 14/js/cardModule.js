// Importar el archivo css de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Crear una función que reciba los datos de la card como parámetros
function crearCard(titulo, imagen, texto, boton) {
  // Crear un elemento div con la clase "card"
  let card = document.createElement('div');
  card.className = 'card';

  // Crear un elemento div con la clase "card-header" y agregar el título
  let cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.textContent = titulo;
  card.appendChild(cardHeader);

  // Crear un elemento img con la clase "card-img-top" y agregar la imagen
  let cardImg = document.createElement('img');
  cardImg.className = 'card-img-top';
  cardImg.src = imagen;
  card.appendChild(cardImg);

  // Crear un elemento div con la clase "card-body" y agregar el texto y el botón
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Crear un elemento p con la clase "card-text" y agregar el texto
  let cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = texto;
  
   // Crear un elemento a con la clase "btn btn-primary" y agregar el botón
   let cardButton = document.createElement('a');
   cardButton.className = 'btn btn-primary';
   cardButton.href = boton.url;
   cardButton.textContent = boton.texto;

   // Agregar el texto y el botón al cuerpo de la tarjeta
   cardBody.appendChild(cardText);
   cardBody.appendChild(cardButton);

   // Agregar el cuerpo de la tarjeta a la tarjeta
   card.appendChild(cardBody);

   // Devolver la tarjeta creada
   return card;
}

// Exportar la función para usarla en otros archivos
export default crearCard;