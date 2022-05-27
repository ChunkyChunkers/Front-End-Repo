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
        img: 'Images/icecreamjpg',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.jpg',
    },
    {
        name: 'fries',
        img: 'Images/fries.jpg',
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
        img: 'Images/icecreamjpg',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.jpg',
    },
    {
        name: 'fries',
        img: 'Images/fries.jpg',
    },
    {
        name: 'milk-shake',
        img: 'Images/milkshake.jpg',
    }
]
cardArray.sort(() => 0.5 - Math.random())


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
function flipCard() {
    console.log('click')
}