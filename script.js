gameModule = (function() {

    const cells = document.querySelectorAll(`.cell`);
    const statusText = document.querySelector(`#statusText`);
    const restartButton = document.querySelector(`#restartButton`);

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = `X`;
    let running = false;

    initializeGame();

    function initializeGame() {

        cells.forEach(cell => cell.addEventListener(`click`, function(e) {

            const cellArray = e.target.parentNode.children;
            const cellIndex = Array.from(cellArray).indexOf(cell);

            if (gameBoard[cellIndex] !== "" || !running) {
                return;
            };

            updateCell(this, cellIndex);
            checkWinner();
        }));

        statusText.textContent = `${currentPlayer}'s Turn`;
        statusText.style.color = "var(--blue-color)";

        restartButton.addEventListener(`click`, restartGame);

        running = true;

    };

    function updateCell(cell, index) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        
        if (currentPlayer === "X") {
            cell.style.color = "var(--blue-color)";
        } else {
            cell.style.color = "var(--purple-color)";
        }
    };

    function changePlayer() {
        currentPlayer = (currentPlayer === `X`) ? `O` : `X`;
        statusText.textContent = `${currentPlayer}'s Turn`;
        if (currentPlayer === "X") {
            statusText.style.color = "var(--blue-color)";
        } else {
            statusText.style.color = "var(--purple-color)";
        }
    };

    function checkWinner() {
        let roundWon = false;

        for (let i = 0; i < winningConditions.length; i++) {

            const condition = winningConditions[i];

            const cellA = gameBoard[condition[0]];

            const cellB = gameBoard[condition[1]];

            const cellC = gameBoard[condition[2]];

            if (cellA === "" || cellB === "" || cellC === "") {
                continue
            };

            if (cellA === cellB && cellB === cellC) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            statusText.textContent = `${currentPlayer} Wins!`;
            running = false;
        } 
        
        else if (!gameBoard.includes("")) {
            statusText.textContent = `It's a Tie!`;
            running = false;
        }

        else {
            changePlayer();
        }
    };

    function restartGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""]
        cells.forEach(cell => cell.textContent = "");
        currentPlayer = `X`;
        statusText.textContent = `${currentPlayer}'s Turn`;
        running = true;
    };

})();