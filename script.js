let gameBoard = {
    row1: [``,``,``],
    row2: [``,``,``],
    row3: [``,``,``]
};

let currentPlayer = `X`;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function round() {

        let rowNumber = Number(prompt(`What row do you choose? (Select 1 to 3 only)`));
        let columnNumber = Number(prompt(`What column do you choose? (Select 1 to 3 only)`));
    
        console.log(`You choose row ${rowNumber} and column ${columnNumber}`);
    
        switch (columnNumber) {
            case 1:
                columnNumber = 0;
                break;
            case 2:
                columnNumber = 1;
                break;
            case 3:
                columnNumber = 2;
                break;
        };
    
        switch (rowNumber) {
            case 1:
                gameBoard.row1[columnNumber] = `${currentPlayer}`;
                break;
            case 2:
                gameBoard.row2[columnNumber] = `${currentPlayer}`;
                break;
            case 3:
                gameBoard.row3[columnNumber] = `${currentPlayer}`;
                break;
        };
    
        console.table(gameBoard);

        changePlayer()
    
};

function changePlayer() {
    currentPlayer = currentPlayer === `X` ? `O` : `X`;
};