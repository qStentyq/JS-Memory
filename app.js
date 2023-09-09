document.addEventListener("DOMContentLoaded",() =>
{
const section = document.querySelector("section")
const playerLivesCount = document.querySelector("span")
const playerLives = 3;

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

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => 
        {
            card.classList.toggle('toggleCard');
        })
    });
};

cardGenerator();
})
