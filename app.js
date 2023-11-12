document.addEventListener("DOMContentLoaded",() =>
{
const section = document.querySelector("section")
let deckBack = 'Numbers'
const playerLivesCount = document.querySelector("h1")
let playerLives = 10;
//Generate data

const getData = (deckBack) => [
    {imgSrc: `./images/${deckBack}/one.png`, name: "one"},
    {imgSrc: `./images/${deckBack}/two.png`, name: "two"},
    {imgSrc: `./images/${deckBack}/three.png`, name: "three"},
    {imgSrc: `./images/${deckBack}/four.png`, name: "four"},
    {imgSrc: `./images/${deckBack}/five.png`, name: "five"},
    {imgSrc: `./images/${deckBack}/six.png`, name: "six"},
    {imgSrc: `./images/${deckBack}/seven.png`, name: "seven"},
    {imgSrc: `./images/${deckBack}/eight.png`, name: "eight"},
    {imgSrc: `./images/${deckBack}/one.png`, name: "one"},
    {imgSrc: `./images/${deckBack}/two.png`, name: "two"},
    {imgSrc: `./images/${deckBack}/three.png`, name: "three"},
    {imgSrc: `./images/${deckBack}/four.png`, name: "four"},
    {imgSrc: `./images/${deckBack}/five.png`, name: "five"},
    {imgSrc: `./images/${deckBack}/six.png`, name: "six"},
    {imgSrc: `./images/${deckBack}/seven.png`, name: "seven"},
    {imgSrc: `./images/${deckBack}/eight.png`, name: "eight"},
    
];

//Randomize func

const randomize = (deckBack) => {
    const cardData = getData(deckBack)
    cardData.sort(() => Math.random() - 0.5);
    return cardData
};

//Card Generator

const cardGenerator = (deckBack) => {
    const cardData = randomize(deckBack);

    console.log(playerLivesCount.parentElement, playerLivesCount)
    playerLivesCount.textContent = `Lives: ${playerLives}`
    //HTML generation

    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div")
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imgSrc
        card.setAttribute('name', item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => 
        {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });
};

//Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped')
    
    //Logic 
    if(flippedCards.length === 2)
    {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name'))
        {
            console.log('match')
            flippedCards.forEach((item) => {
                item.classList.remove('flipped');
                item.style.pointerEvents = 'none'
            })
            checkAll();
        } else {
            console.log('wrong')
            flippedCards.forEach((item) => {
                item.classList.remove('flipped')
                setTimeout(function() {item.classList.remove('toggleCard')}, 800)
            })
            playerLives--;
            playerLivesCount.textContent = `Lives: ${playerLives}`;
            if(playerLives <= 0)
            {
                restart()
                zeroLifes()
            }
        }
    }
    
}
const checkAll = () =>
{
    const allCards = document.querySelectorAll('.card');
    const toggledCards = document.querySelectorAll('.toggleCard')
    console.log(allCards.length, toggledCards.length)
    if(allCards.length === toggledCards.length)
    {
        document.getElementById('popup').style = "display: block";
        
    }
}

zeroLifes = () =>
{
    document.getElementById('popup').style = "display: block";
    let title = document.querySelector('.popup_title')
    title.innerHTML = `Game is finished!<br>You lost`
}

//RESTART 
const restart = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');
    })
}

const checkPopUp = () => {
    buttons = document.querySelectorAll('.popup_button')
    buttons.forEach((item) => {
        item.addEventListener('click', () => {
            deckBack = item.id
            console.log(deckBack)
            cardGenerator(deckBack)
            document.getElementById('popup2').style = "display: none";
        })
    })
}

checkPopUp()

});



