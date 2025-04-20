const cardsList = [
    'bird2.jpg', 'bird2.jpg', 'cat.jpg', 'cat.jpg', 'parrot.jpg', 'parrot.jpg',
    'ostrich.avif', 'ostrich.avif', 'squirrel.jpg', 'squirrel.jpg', 'turtle.jpg', 'turtle.jpg'  
];
cardsList.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".gameGrid");
const cardsInGame = 6;
let attempts = 0;
let foundCards = 0;

let chosenCards = [];
let chosenCardsIds = [];

function initiateBoard() {
    for (let i = 0; i < cardsList.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("src", "images/card-backside.jpg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    }
}

function flipCard() {
    if (chosenCards.length != 2) {
        let cardId = this.getAttribute("data-id");
        if (this.getAttribute("src") !== "images/") {
            chosenCards.push(cardId);
            chosenCardsIds.push(cardId);
            this.setAttribute("src", "images/" + cardsList[cardId]);
            if (chosenCards.length === 2) {
                setTimeout(checkForMatch, 400);
            }
        }
    }
}

function checkForMatch() {
    attempts++;
    let cards = document.querySelectorAll("img");
    let firstCard = chosenCardsIds[0];
    let secondCard = chosenCardsIds[1];

    if (cardsList[chosenCards[0]] === cardsList[chosenCards[1]]) {
        foundCards++;
        cards[firstCard].setAttribute;
        cards[secondCard].setAttribute;
    } else {
        cards[firstCard].setAttribute("src", "images/card-backside.jpg");
        cards[secondCard].setAttribute("src", "images/card-backside.jpg");
    }

    chosenCards = [];
    chosenCardsIds = [];

    if (foundCards === cardsInGame) {
        alert("Well done!");
    }

    const resetButton = document.querySelector("#button");  
    resetButton.addEventListener("click", resetGame);

    function resetGame() {
        grid.innerHTML = '';

        attempts = 0;
        foundCards = 0;
        chosenCards = [];
        chosenCardsIds = [];
        cardsList.sort(() => 0.5 - Math.random());
        initiateBoard();
    }
}

initiateBoard();