/*1. Desarrolla una librería Croupier que tenga una función para
barajar cartas. Para barajar, intercambiamos una carta aleatoria
dentro de nuestra baraja por otra. Y esto lo hacemos 100 veces.
Se recomienda usar la librería Math.random. Por ejemplo, intercambiar
la carta en la posición 7 por la carta en la posición 24.*/

console.log("creando baraja...");

var deck = [];
var suit = ["c", "d", "t", "p"];
var cardMaxNumber = 13;
var currentCarIndex = 0;
var currentCard = {}

for (var i = 0; i < suit.length; i = i + 1) {
  for (var j = 1; j <= cardMaxNumber; j = j + 1) {
    currentCard = {number: j,suit: suit[i]};
    deck[currentCarIndex] = currentCard;
    console.log(currentCard);
    currentCarIndex = currentCarIndex + 1;
    }
  }

function shuffling () {
  console.log("barajando...");
  var shuffleDeck = [];
  for (var i = 0; i <100; i++) {
    var cut1 = Math.round(Math.random ()*51);
    var cut2 = Math.round(Math.random ()*51);
    shuffleDeck[i] = deck[cut1];
    deck[cut1] = deck[cut2];
    deck[cut2] = shuffleDeck[i];
    console.log(shuffleDeck[i]);
  }
return shuffleDeck;
}

shuffling ();

//var croupier = {deck:shuffling};
//croupier.shuffling(deck);


/*2. Desarrolla nuevas funciones de la librería Croupier: Repartir,
que toma la carta en primera posición de la baraja y la elimina del
array Puntuar que, dada una mano de 4 cartas sume su valor. Pero si
todas las cartas son iguales, multiplica el valor por 10.*/

console.log("Eliminando la primera posición...");

function shareOne (cards) {
  shuffleDeck.splice(0,1)
}

shareOne ();

console.log("calculando la puntuación");
var hand = [];
function punctuate (hand) {
  var total = 0;
  for (var i = 0; i <= 4; i++) {
    if (hand [0]=== && hand[1] === && hand[3] === hand[4]);
    total = total + hand[i]*10;
  } else {
    total = hand[i];
  }

}

/*3. Desarrolla una librería Calculadora que calcula las longitudes
de varias figuras geométricas como cuadrados, rectángulos y círculos.*/
