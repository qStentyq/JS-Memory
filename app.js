document.addEventListener("DOMContentLoaded",() =>
{
const section = document.querySelector("section")
const playerLivesCount = document.querySelector("span")
let playerLives = 10;
playerLivesCount.textContent = playerLives

//Generate data

const getData = () => [
    {imgSrc: "./images/one.png", name: "one"},
    {imgSrc: "./images/two.png", name: "two"},
    {imgSrc: "./images/three.png", name: "three"},
    {imgSrc: "./images/four.png", name: "four"},
    {imgSrc: "./images/five.png", name: "five"},
    {imgSrc: "./images/six.png", name: "six"},
    {imgSrc: "./images/seven.png", name: "seven"},
    {imgSrc: "./images/eight.png", name: "eight"},
    {imgSrc: "./images/one.png", name: "one"},
    {imgSrc: "./images/two.png", name: "two"},
    {imgSrc: "./images/three.png", name: "three"},
    {imgSrc: "./images/four.png", name: "four"},
    {imgSrc: "./images/five.png", name: "five"},
    {imgSrc: "./images/six.png", name: "six"},
    {imgSrc: "./images/seven.png", name: "seven"},
    {imgSrc: "./images/eight.png", name: "eight"},
    
];

//Randomize func

const randomize = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5);
    return cardData
};

//Card Generator

const cardGenerator = () => {
    const cardData = randomize();
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
            playerLivesCount.textContent = playerLives;
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

cardGenerator();
});
