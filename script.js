let GameBoard = (function(){

    let gameBoard = [];

    for(let i = 0; i < 9; ++i) gameBoard.push(document.createElement('button'));

    // Cache the DOM
    const gameBoardElement = document.querySelector('#game-board');
    
    // Render the gameboard
    function render(){
        gameBoard.forEach((element) => {
            element.setAttribute('class', 'board-square');
            element.textContent = ' ';
            gameBoardElement.appendChild(element);
        });
    }

    render();

})();

let Player = (playerName) => {
    let name = playerName;
    let icon = ' ';

    const getIcon = () => icon;
    const getName = () => name;
    const setIcon = (symbol) => {
        icon = symbol;
    }

    return {getIcon, setIcon, getName};
}

const PlayGame = (player1, player2, gameBoard) => {
    let p1 = player1;
    let p2 = player2;
    let board = gameBoard;

    // Cache DOM
    const iconX = document.querySelector('#x-icon');
    const iconO = document.querySelector('#o-icon');

    // Bind events
    iconX.addEventListener('click', (e) => {
        iconX.classList.toggle('selected');
        if(iconO.classList.contains('selected')){
            iconO.classList.toggle('selected');
        }
        iconSelect();
    });
    iconO.addEventListener('click', (e) => {
        iconO.classList.toggle('selected');
        if(iconX.classList.contains('selected')){
            iconX.classList.toggle('selected');
        }
        iconSelect();
    });

    // Set the player's icon
    const iconSelect = () => {
        let icon = () => {
            if(iconX.classList.contains('selected')){ return 'X';}
            else if(iconO.classList.contains('selected')) { return 'O';}
            else {return ' ';}
        }
        if(icon() === 'X') {
            p1.setIcon(icon());
            p2.setIcon('O');
        } else if(icon() === 'O') {
            p1.setIcon(icon());
            p2.setIcon('X');
        } else { alert('Choose an icon!'); }

        console.log(`Player 1 is ${p1.getIcon()}`);
        console.log(`Player 2 is ${p2.getIcon()}`);
    }

    iconSelect();
    
}

const player1 = Player('Player 1');
const player2 = Player('Player 2');

PlayGame(player1, player2, GameBoard);