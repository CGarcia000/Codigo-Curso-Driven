const container = document.getElementById('container');

const basicCards = [
    {type: '1', img: 'assets/img/bobrossparrot.gif'},
    {type: '2', img: 'assets/img/explodyparrot.gif'},
    {type: '3', img: 'assets/img/fiestaparrot.gif'},
    {type: '4', img: 'assets/img/metalparrot.gif'},
    {type: '5', img: 'assets/img/revertitparrot.gif'},
    {type: '6', img: 'assets/img/tripletsparrot.gif'},
    {type: '7', img: 'assets/img/unicornparrot.gif'},
]

function startGame() {
    container.innerHTML = ''
    
    const numCards = getInput();
    const cards = getArrayCards(numCards);
    let cardsSelected = [];

    for (let i=0; i < numCards; i++) {
        const card = document.createElement('div');
        card.setAttribute('class', `card ${cards[i].type}`);
        // card.setAttribute('class', cards[0].type);
        card.style.backgroundImage = "url('assets/img/front.png')"
        card.addEventListener('click', () => {
            card.classList.toggle('turned');
            if (card.classList.contains('turned')) {
                // setTimeout(
                //     () => {card.style.backgroundImage = `url('${cards[i].img}')`},
                //     100);
                card.style.backgroundImage = `url('${cards[i].img}')`
                cardsSelected.push(card);
                console.log(cardsSelected)
                if (cardsSelected.length === 2) cardsSelected = checkMatch(cardsSelected);
            } else {
                setTimeout(
                    () => {card.style.backgroundImage = "url('assets/img/front.png')"},
                    100);
                cardsSelected.pop(cards[i]);
            }
        });
        container.appendChild(card);
    }   
    checkGame();
}


function getInput() {
    // Função que retorna o valor correto do input
    while (true) {
        const numInput = Number(prompt('Qual o número de cartas do jogo? (4 ~ 14 cartas)'));
        if (!isNaN(numInput)) {
            if (numInput <= 14 && numInput >= 4) return Math.floor(numInput/2) * 2;
            alert('Escolha um valor entre 4 e 14');
        } else alert('Valor inválido');
    }
}

function getArrayCards(numCards) {
    // Função que retorna array com os valores das cartas que vão ser usadas no jogo
    basicCards.sort(() => 0.5 - Math.random());
    cards = basicCards.slice(0, numCards/2);
    // Duplica a array para conter todos os pares
    cards = cards.concat(cards).sort(() => 0.5 - Math.random());
    return cards;
}


function checkGame() {
    
}


function checkMatch(arraySelected) {
    // Função que checa se as cartas são iguais e retorna a array com as cartas selecionadas
    if (arraySelected[0].classList.value == arraySelected[1].classList.value) {
        console.log('Eh um match')
        // remove eventListeners
        arraySelected[0].replaceWith(arraySelected[0].cloneNode(true))
        arraySelected[1].replaceWith(arraySelected[1].cloneNode(true))

        arraySelected = arraySelected.slice(2);
    }
    else {
        console.log('não é um match');
        const arrToRemove = [
            arraySelected[0],
            arraySelected[1]
        ];

        setTimeout(() => {
            removeSelected(arrToRemove[0]);
            removeSelected(arrToRemove[1]);
        }, 2000);
        arraySelected = arraySelected.slice(2);
    }
    return arraySelected;
}

function removeSelected(cardToRemove) {
    cardToRemove.classList.remove('turned');
    setTimeout(
        () => {cardToRemove.style.backgroundImage = "url('assets/img/front.png')"},
        100);
}