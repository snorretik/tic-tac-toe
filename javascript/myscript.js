let setUpGame = (function () {
    `use strict`;

    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let comp = false;
    let player1name = "";
    let player2name = "";
    let entered1 = false;
    let entered2 = false;
    
    const startRestartButt = document.querySelector("#startRestart");
    startRestartButt.addEventListener('click', (e) => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        comp = false;
        player1name = "";
        player2name = "";
        entered1 = false;
        entered2 = false;
        // misschien nog meer nodig...
    })

    const opponentTogg = document.querySelector("#opponentToggle");
    opponentTogg.addEventListener('click', (e) => {
        if ((entered1 == false) && (entered2 == false)) {
            comp = !comp;
            remOrAdd(comp);
        }
    })

    const player1NameEvent = document.querySelector("#namePlayButton1");
    player1NameEvent.addEventListener('click', (e) => {
        const player1NameField = document.querySelector("#namePlayerIn1");
        player1name = player1NameField.textContent;

        entered1 = true;

        if ((comp == true) && (entered1 == true)) {
            return { player1name: player1name, gameBoard: gameBoard };
        } else if ((comp == false) && (entered2 == true) && (entered1 == true)) {
            return { player1name, player2name, gameBoard };
        }
    })

    const player2NameEvent = document.querySelector("#namePlayButton2");
    player2NameEvent.addEventListener('click', (e) => {
        const player2NameField = document.querySelector("#namePlayerIn2");
        player2name = player2NameField.textContent;

        entered2 = true;

        if ((comp == false) && (entered1 == true) && (entered2 == true)) {
            return { player1name, player2name, gameBoard };
        }
    })

    function remOrAdd(computerOrNot) {
        const mainDiv = document.querySelector("#settings");
    
        if (computerOrNot == true) {
            const toggle = document.querySelector("#opponentToggle");
            
            const player2Form = document.querySelector("#player2");
            const play2input = document.querySelector("#namePlayerIn2");
            const play2Button = document.querySelector("#namePlayButton2");
            const play2Break = document.querySelector("#play2Break");
    
            player2Form.removeChild(play2input);
            player2Form.removeChild(play2Button);
            mainDiv.removeChild(player2Form);
            mainDiv.removeChild(play2Break);
    
            toggle.textContent = "Against 2nd player";
    
        } else if (computerOrNot == false) {
            const toggle = document.querySelector("#opponentToggle");
            
            const player2Form = document.createElement("form");
            player2Form.setAttribute("id", "player2");
            player2Form.setAttribute("action", "");
            const play2input = document.createElement("input");
            play2input.setAttribute("id", "namePlayerIn2");
            play2input.setAttribute("type", "text");
            play2input.setAttribute("placeholder", "Player 2 name:")
            play2input.setAttribute("required", "");
            const play2Button = document.createElement("button");
            play2Button.setAttribute("id", "namePlayButton2");
            play2Button.setAttribute("type", "submit");
            play2Button.textContent = "submit";
            play2Button.style.cssText = "margin: 0px 0px 0px 4px";
            const play2Break = document.createElement("br");
            play2Break.setAttribute("id", "play2Break");
    
            mainDiv.appendChild(player2Form);
            player2Form.appendChild(play2input);
            player2Form.appendChild(play2Button);
            mainDiv.appendChild(play2Break);
    
            toggle.textContent = "Against computer";
    
        } else {
            console.log(computerOrNot);
        }
    }

})();

(function () {
    'use strict';

    let turnPlayer1 = true;

    if ("player2name" in setUpGame) {
        const player1InGame = player(setUpGame.player1name);
        const player2InGame = player(setUpGame.player2name);
        twoPlayerGame(player1InGame, player2InGame, setUpGame.gameBoard);

    } else if (!("player2name" in setUpGame)) {
        const player1InGame = player(setUpGame.player1name);
        onePlayerGame(player1InGame, setUpGame.gameBoard);
        
    } else {
        console.log(setUpGame.player2name);
    }

    function twoPlayerGame(player1, player2) {
        const eventButtons = Array.from(document.querySelectorAll(".clickAble"));
        eventButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (turnPlayer1 == true) {
                    button.textContent = "X";
                    turnPlayer1 = false;
                } else if (turnPlayer1 == false) {
                    button.textContent = "O";
                    turnPlayer1 = true;
                }
            })
        })
    }

    function onePlayerGame(player1) {

    }

})();

function player(name) {
    // factory function

    return { name };
}


// -----------------------------------
// additional functions:

function displayBoard() {

}
