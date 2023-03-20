/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

`<div class="square"></div>`
*/

const levelForm = document.getElementById('levelForm');
levelForm.addEventListener('submit', play);

//disegna le celle
function drawSquare(index, numSquares) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${numSquares})`;
    square.style.height = `calc(100% / ${numSquares})`;
    square.innerHTML = index;
    return square;
}

function play(e) {
    e.preventDefault();
    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    //prendo il livello
    const level = document.getElementById('level').value;
    //console.log(level)
    //impostare n celle a seconda del livello
    let squareNumbers;
    switch (level) {
        case 'easy':
            squareNumbers = 100;
            break;
        case 'medium':
            squareNumbers = 81;
            break;
        case 'hard':
            squareNumbers = 49;
            break;
    };
    //console.log(squareNumbers)

    //determino il n di celle per lato
    let squareForRow = Math.sqrt(squareNumbers);
    //console.log(squareForRow);
    //per il numero di celle genero la cella
    for (let i = 1; i <= squareNumbers; i++) {
        const square = drawSquare(i, squareForRow);
        playground.appendChild(square);
    }
}
