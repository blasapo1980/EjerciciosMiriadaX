/* Ejercicio 1. Programa un ejemplo que almacene en un array todas
las cartas de la baraja, cada una representada con un diccionario
que tenga un palo y un valor.*/

var deck = [];
var suit = ["c","d","t","p"];
var cardMaxNumber = 13;
var currentCarIndex = 0;
var currentCard = {}

for (var suitCounter = 0; suitCounter<suit.length; suitCounter = suitCounter + 1){
  for (var numberCounter = 1; numberCounter<=cardMaxNumber; numberCounter = numberCounter + 1){
    currentCard = {number: numberCounter,suit: suit[suitCounter]};
    deck[currentCarIndex] = currentCard;

    console.log(currentCard);

    currentCarIndex = currentCarIndex + 1;

  }
}

/* 2. Partiendo del array que has construido en el ejercicio anterior,
construye un algoritmo que filtre en un nuevo array sólo las cartas rojas,
y en otro array las cartas negras.*/

var redCards = [];
var blackCards = [];

for (var deckCounter = 0; deckCounter < deck.length; deckCounter++) {
  if (deck [deckCounter].suit === "c" || deck [deckCounter].suit === "d") {
    redCards [redCards.length] = deck [deckCounter]
  } else {
    blackCards[blackCards.length] = deck [deckCounter]
  }
}
console.log(redCards + blackCards);


/*3. Partiendo del array que has construido en el ejercicio anterior,
construye un algoritmo que filtre en un nuevo array las cartas rojas y pares.
Luego imprime en la consola la última carta de ese nuevo array.*/

var redCardsPar = []
for (var redCardsCounter = 0; redCardsCounter<redcards.legnth; redCardsCounter++){
    if (redCards [redCardsCounter].number % 2 === 0) {
      redCardsPar[redCardsPar.length] = redCards [redCardsCounter];
    }
    
console.log(redCardsPar[redCardsPar.length - 1]);
