
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('card-el');
let messageEl = document.getElementById('message-el');

function getRandomCard(){
    let randomNumbers = Math.floor(Math.random() * 13) + 1;
    if(randomNumbers === 1){
        return 11;
    }
    else if(randomNumbers > 10){
        return 10;
    }
    else{
        return randomNumbers;
    }
}
function startGame(){
    if(isAlive === false){
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    }
}
function renderGame(){
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: " + sum;

    for(let i = 0; i < cards.length; i += 1){
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum < 21){
        message = 'Do you want to draw a new card?';
    } else if(sum === 21){
        message = "Woohoo! you've got a blackJack!";
        hasBlackJack = true;
    } else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

