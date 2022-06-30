let GameBoard = (function(){

    let gameBoard = [];
    const getGameBoard = () => gameBoard;

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
  
    return {getGameBoard};

})();

let Player = (playerName, playerIcon) => {
    let name = playerName;
    let icon = playerIcon;

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
    let currentPlayer = p1;

    // Cache DOM
    const iconX = document.querySelector('#x-icon');
    const iconO = document.querySelector('#o-icon');
    const gameBoardBtns = document.querySelectorAll('.board-square');
    const restartBtn = document.querySelector('.restart-btn');

    // Bind events
    iconX.addEventListener('click', () => {
        p1.setIcon('X');
        p2.setIcon('O');
        console.log(`Player 1 is ${p1.getIcon()}`);
        console.log(`Player 2 is ${p2.getIcon()}`);
        iconX.classList.toggle('selected');
        if(iconO.classList.contains('selected')){
            iconO.classList.toggle('selected');
        }
    });

    iconO.addEventListener('click', () => {
        p1.setIcon('O');
        p2.setIcon('X');
        console.log(`Player 1 is ${p1.getIcon()}`);
        console.log(`Player 2 is ${p2.getIcon()}`);
        iconO.classList.toggle('selected');
        if(iconX.classList.contains('selected')){
            iconX.classList.toggle('selected');
        }
    });

    gameBoardBtns.forEach(function(btn, index){
        btn.addEventListener('click', () => {
            iconX.disabled = true;
            iconO.disabled = true;
            if(btn.textContent === ' ') {
                btn.textContent = currentPlayer.getIcon();
                currentPlayer = (currentPlayer.getIcon() === 'X') ? p2 : p1;
                hasWinner(currentPlayer);
            }
        });
    });

    restartBtn.addEventListener('click', resetGameBoard);

    // Game logic
    const hasWinner = (currentPlayer) => {
        if(board.getGameBoard()[0].textContent === 'X' && board.getGameBoard()[1].textContent === 'X' && board.getGameBoard()[2].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[3].textContent === 'X' && board.getGameBoard()[4].textContent === 'X' && board.getGameBoard()[5].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[6].textContent === 'X' && board.getGameBoard()[7].textContent === 'X' && board.getGameBoard()[8].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[0].textContent === 'X' && board.getGameBoard()[3].textContent === 'X' && board.getGameBoard()[6].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[1].textContent === 'X' && board.getGameBoard()[4].textContent === 'X' && board.getGameBoard()[7].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[2].textContent === 'X' && board.getGameBoard()[5].textContent === 'X' && board.getGameBoard()[8].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[0].textContent === 'X' && board.getGameBoard()[4].textContent === 'X' && board.getGameBoard()[8].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[2].textContent === 'X' && board.getGameBoard()[4].textContent === 'X' && board.getGameBoard()[6].textContent === 'X') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };

        // player 2
        if(board.getGameBoard()[0].textContent === 'O' && board.getGameBoard()[1].textContent === 'O' && board.getGameBoard()[2].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[3].textContent === 'O' && board.getGameBoard()[4].textContent === 'O' && board.getGameBoard()[5].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[6].textContent === 'O' && board.getGameBoard()[7].textContent === 'O' && board.getGameBoard()[8].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[0].textContent === 'O' && board.getGameBoard()[3].textContent === 'O' && board.getGameBoard()[6].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[1].textContent === 'O' && board.getGameBoard()[4].textContent === 'O' && board.getGameBoard()[7].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[2].textContent === 'O' && board.getGameBoard()[5].textContent === 'O' && board.getGameBoard()[8].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[0].textContent === 'O' && board.getGameBoard()[4].textContent === 'O' && board.getGameBoard()[8].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
        if(board.getGameBoard()[2].textContent === 'O' && board.getGameBoard()[4].textContent === 'O' && board.getGameBoard()[6].textContent === 'O') {
            console.log(`${currentPlayer.getName()} WINS!`);
            disableGameBoard();
        };
    }

    const disableGameBoard = () => {
        gameBoardBtns.forEach(function(btn) {
            btn.disabled = true;                
        });
    }

    const enableGameBoard = () => {
        gameBoardBtns.forEach(function(btn) {
            btn.disabled = false;                
        });
    }

    function resetGameBoard(){
        gameBoardBtns.forEach(function(btn) {
            btn.textContent = ' ';
            iconX.disabled = false;
            iconO.disabled = false;
            enableGameBoard();           
        }); 
    }
}

const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

PlayGame(player1, player2, GameBoard);