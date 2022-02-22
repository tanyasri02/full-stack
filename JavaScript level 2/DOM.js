//restart
var restart = document.querySelector('#b');

//grab all squares
var squares = document.querySelector('td');

//clear all squares
function clearBoard() {
    for (let i = 0; i < squares.clientHeight; i++) {
        squares[i] = '';
    }
}
restart.addEventListener('click', clearBoard)