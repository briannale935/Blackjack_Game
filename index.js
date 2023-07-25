let allCards = [];
let sum = 0;
let gameLost = false;
let message = " ";
let messageElement = document.getElementById("message-element");
let sumElement = document.getElementById("sum-element");
let cardElement = document.getElementById("card-element");

function getRandomValue() {
  let randomValue = Math.floor(Math.random() * 13) + 1;
  // In Blackjack, an ace returns a value of 11, the code is changed to reflect this
  if (randomValue > 10) {
    return 10;
  } else if (randomValue === 1) {
    return 11;
  } else {
    return randomValue;
  }
}

function startGame() {
  gameLost = false;
  let cardOne = getRandomValue();
  let cardTwo = getRandomValue();
  allCards = [cardOne, cardTwo];
  sum = cardOne + cardTwo;
  newCard();
}

function newCard() {
  cardElement.textContent = "Cards: ";
  for (let i = 0; i < allCards.length; i++) {
    cardElement.textContent += allCards[i] + " , ";
  }
  sumElement.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Would you like to draw another card?";
  } else if (sum === 21) {
    message = "Winner!";
    gameLost = false;
  } else if (sum > 21) {
    message = "You Lose!";
    gameLost = true;
  }
  messageElement.textContent = message;
}

function newDraw() {
  if (gameLost === false) {
    let cardNew = getRandomValue();
    sum += cardNew;
    allCards.push(cardNew);
    newCard();
  }
}
