const cardArray = [
    {
        name: 'fries',
        img: 'Images/fries.jpg',
    },
    {
        name: 'burger',
        img: 'Images/burger.png',
    },
    {
        name: 'boba',
        img: 'Images/boba.jpg',
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: 'Images/icecream.jpg',
    },
    {
        name: 'drink',
        img: 'Images/drink.jpg',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.jpg',
    },
    {
        name: 'milk-shake',
        img: 'Images/milkshake.jpg',
    },
    {
        name: 'fries',
        img: 'Images/fries.jpg',
    },
    {
        name: 'burger',
        img: 'Images/burger.png',
    },
    {
        name: 'boba',
        img: 'Images/boba.jpg',
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: 'Images/icecream.jpg',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.jpg',
    },
    {
        name: 'drink',
        img: 'Images/drink.jpg',
    },
    {
        name: 'milk-shake',
        img: 'Images/milkshake.jpg',
    }
]
cardArray.sort(() => 0.5 - Math.random())

let cardsChosen = []
let cardsChosenId = []
const gridDisplay = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
const cardsWon = []











function createBoard() {
    for (let index = 0; index < cardArray.length; index++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id', index)
        card.classList.add("child")
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        

    }
}
createBoard();

function checkCards() {
    
    const cards = document.querySelectorAll('.grid img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
  
    if (cardsChosen[0] == cardsChosen[1] && optionOneId != optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Images/test3.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/test3.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'Images/blank.png')
        cards[optionTwoId].setAttribute('src', 'Images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.innerHTML = cardsWon.length

    if (cardsWon.length =  cardArray.length/2 ) {
        resultDisplay.innerHTML("Congratulations you've matched them all!!")
    }


}


function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosenId.push(cardId)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkCards, 500)
    }

}