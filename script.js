let GameBoard = (function(){

    // Set up a blank gameboard
    let gameBoard = [
        {icon: ' ', available: true}, {icon: ' ', available: true}, {icon: ' ', available: true},
        {icon: ' ', available: true}, {icon: ' ', available: true}, {icon: ' ', available: true},
        {icon: ' ', available: true}, {icon: ' ', available: true}, {icon: ' ', available: true}
    ];

    // Cache the DOM
    const gameBoardElement = document.querySelector('#game-board');
    
    // Render the gameboard
    function render(){
        for (position of gameBoard){
            const square = document.createElement('button');
            square.setAttribute('class', 'board-square');
            square.textContent = position.icon;
            gameBoardElement.appendChild(square);
        }
    }

    render();

})();

