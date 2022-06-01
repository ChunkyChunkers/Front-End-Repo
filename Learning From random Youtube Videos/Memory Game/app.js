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

const cardsChosen = [];
const cardsChosenId = []
const gridDisplay = document.querySelector('.grid')
console.log(gridDisplay)











function createBoard() {
    for (let index = 0; index < cardArray.length; index++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id', index)
        card.classList.add("child")
        card.addEventListener('click', flipCard)

        console.log(card, index)
        gridDisplay.appendChild(card)


    }
}
createBoard();
function checkCards() {
    const cards = document.querySelector('.grid img')
    console.log('check for match')
    if (cardsChosen[0] == cardsChosen[1]) {
     alert('You found A match')  
     cards[cardsChosenId[0]].setAttribute('src', 'Images/white.wepb') 
    }
    
}


function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosenId.push(cardId)
    console.log(cardsChosenId)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkCards, 500)
    }
}