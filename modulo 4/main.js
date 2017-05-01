/*1. Desarrolla una función que puntúe una mano de cartas,
que tenga como parámetro un array de cartas, cada una representada por un
diccionario con palo y valor. Al puntuar, las cartas suman su valor excepto
si es un as que suma 20. Prueba a invocarla con varias manos de cartas con y sin ases.*/

function puntuationHand(hand) {
    var total = 0;
    for (i = 0; i < hand.length; i++) {
        if (hand[i].number === 1) {
            total = total + 20;
        } else {
            total = total + hand[i].number;
        }
    }
  return total;
}

var hand1 = [
  {number: 1, suit: "t"},
  {number: 7, suit: "d"},
  {number: 5, suit: "r"},
  {number: 1, suit: "p"}
];

var hand2 = [
  {number: 6, suit: "t"},
  {number: 8, suit: "d"},
  {number: 10, suit: "r"},
  {number: 4, suit: "p"}
];

var hand3 = [
  {number: 12, suit: "t"},
  {number: 2, suit: "d"},
  {number: 3, suit: "r"},
  {number: 4, suit: "p"}
];

var total1 = puntuationHand (hand1);
console.log("La puntuación de la mano 1 es: " + total1);
var total2 = puntuationHand (hand2);
console.log("La puntuación de la mano 2 es: " + total2);
var total3 = puntuationHand (hand3);
console.log("La puntuación de la mano 2 es: " + total3);

/* 2. Partiendo de la función anterior, modíficala para que además
las cartas rojas sumen el doble. Prueba a invocarla con varias manos de cartas.*/

function puntuationHandWithReds(hand) {
    var totalScore = 0;

    for (var i = 0; i < hand.length; i++) {
      var card = hand[i].number;

        if (hand[i].suit === "c" || hand[i].suit === "r") {
            card = (hand[i].number) * 2
        }
        if (hand[i].number === 1) {
            card = 20;
        }
        totalScore = totalScore + card;
    }
    return totalScore;
}

var hand4 = [
  {number: 1, suit: "t"},
  {number: 7, suit: "c"},
  {number: 5, suit: "r"},
  {number: 1, suit: "p"}
];

var hand5 = [
  {number: 6, suit: "t"},
  {number: 8, suit: "c"},
  {number: 10, suit: "r"},
  {number: 4, suit: "p"}
];

var hand6 = [
  {number: 12, suit: "t"},
  {number: 2, suit: "c"},
  {number: 3, suit: "r"},
  {number: 4, suit: "p"}
];

var total4 = puntuationHandWithReds (hand4);
console.log("La puntuación de la mano 4 es: " + total4);
var total5 = puntuationHandWithReds (hand5);
console.log("La puntuación de la mano 5 es: " + total5);
var total6 = puntuationHandWithReds (hand6);
console.log("La puntuación de la mano 6 es: " + total6);

/*3. Desarrolla un programa que use la función anterior para puntuar
las manos de cartas de dos jugadores e imprima por consola al ganador,
 es decir, al que obtenga mayor puntuación.*/

function winner (jugador1, jugador2) {
  if (total5 > total6) {
    console.log("El jugador 5 ha obtenido mayor puentuación que el 6");
  }

  if (total5 < total6) {
    console.log("El jugador 6, ha obtenido mayor puntuación que el 5");

  }
  if (total5 == total6) {
    console.log("Los jugadores 5 y 6 han obtenido la misma puntuación");
  }
}
var Jugador1 = total5;
var jugador2 = total6;
winner ()
