(function() {
    // variables
    // _private
    // public

    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let _play = false;
    let _comp = false;
    let _player1Name = "";
    let _player2Name = "";
    
    let player1 = {};
    let player2 = {};
    let play1Turn = true;

    function setButtons() {
        // second in line I think... after setSubmitButtons
        const clickMoves = Array.from(document.querySelectorAll(".vakjes"));
        for (let i = 0; i < clickMoves.length; i++) {
            clickMoves[i].addEventListener('click', playClickFunction(i));
            // moet misschien clickMoves ook -------------------------^
        }
    }

    // hier nog een function removeButtonEvents...?

    function firstMove() {
        if (_play == false) {

            if ((_player1Name != "") && (_player2Name != "")) {
                player1 = player(_player1Name, "X");
                player2 = player(_player2Name, "O");
                
                _play = true;
                
            } else if ((_player1Name != "") && (_comp == true)) {
                player1 = player(_player1Name, "X");

                _play = true;
                
            } else if ((_player1Name == "") && (_comp == true)) {
                player1 = player("Anonymous", "X");
                
                _play = true;

            } else if ((((_player1Name != "") && (_player2Name == "")) && (_comp == "false")) || (((_player1Name == "") && (_player2Name != "")) && (comp == "false"))) {
                _play = false;
            } else {
                console.log(_player1Name);
                console.log(_player2Name);
                console.log(_play);
                
                // kan zijn dat dit leeg moet zijn
            }
        } else {
            console.log(_play);

            // kan zijn dat dit leeg moet zijn
        }
    }

    function playClickFunction(number) {
        firstMove();

        if ((_comp == true) && (_play == true)) {
            // singleplayer game
            // hoeft geen while knop. Het wordt gespeeld door opeenvolgens knoppen te drukken, dus dit fired elke keer.
            if (play1Turn == true) {
                const buttonHTML = document.querySelector(`#${number + 1}`);
                buttonHTML.textContent = player1.sign;
                gameBoard[i] = player1.sign;

                if (checkIfWon(player1.sign)) {
                    player1.wonMessage();
                    startRestart();
                }
                play1Turn = false;
                // computer turn, and inside set play1Turn true again
                playCompTurn();
                if (checkIfWon(compSign)) {
                    compWonMessage();
                    startRestart();
                }
            }

        } else if ((_comp == false) && (_play == true)) {
            // multiplayer game
        }
        else if (_play == false) {
            // niks...?
        }
    }

    function checkIfWon(sign) {
        if ((gameBoard[0] == sign) && (gameBoard[1] == sign) && (gameBoard[2] == sign)) {
            return true;    
        } else if ((gameBoard[3] == sign) && (gameBoard[4] == sign) && (gameBoard[5] == sign)) {
            return true;
        } else if ((gameBoard[6] == sign) && (gameBoard[7] == sign) && (gameBoard[8] == sign)) {
            return true;
        } else if ((gameBoard[0] == sign) && (gameBoard[3] == sign) && (gameBoard[6] == sign)) {
            return true;
        } else if ((gameBoard[1] == sign) && (gameBoard[4] == sign) && (gameBoard[7] == sign)) {
            return true;
        } else if ((gameBoard[2] == sign) && (gameBoard[5] == sign) && (gameBoard[8] == sign)) {
            return true;
        } else if ((gameBoard[0] == sign) && (gameBoard[4] == sign) && (gameBoard[8] == sign)) {
            return true;
        } else if ((gameBoard[2] == sign) && (gameBoard[4] == sign) && (gameBoard[6] == sign)) {
            return true;
        }
    }

    function startRestart() {
        
    }

    function setSubmitButtons() {
        // moet al voor het spel start
        const button1 = document.querySelector("#button1");
        const button2 = document.querySelector("#button2");
        const compToggle = document.querySelector("#opponentToggle");

        button1.addEventListener('click', (e) => {
            const input1 = document.querySelector("#input1");
            if (input1.value != "") {
                _player1Name = input1.value;
            }
        })

        button2.addEventListener('click', (e) => {
            const input2 = document.querySelector("#input2");
            if (input2.value != "") {
                _player2Name = input2.value;
            }
        })

        compToggle.addEventListener('click', (e) => {
            if (_comp == false) {
                
                compToggle.textContent = ""
            } else if (_comp == true) {

            } else {
                console.log(_comp);
            }
        })
    }


})();

(function(sign) {
    function playCompTurn () {
        let makeChoice = true;

        let number = (Math.floor((Math.random() * 10) + 1) - 1);

        while (makeChoice) {
            if (gameBoard[number] == "") {
                const buttonHTML = document.querySelector(`#${number + 1}`);
                buttonHTML.textContent = sign;
                gameBoard[i] = sign;

                play1Turn = true;
                makeChoice = false;
            } else if (gameBoard[number] != "") {
                number = (Math.floor((Math.random() * 10) + 1) - 1);
            }
        }
    }

    function compWonMessage() {
        const outputVariable = document.querySelector("#outputString");
        outputVariable.textContent = "Computer has won!";
    }
    return {
        compSign: sign,
        compWonMessage: compWonMessage,
        playCompTurn: playCompTurn
    }
})();

function player(name, sign) {
    // maybe do some more...
    // misschien variabelen nog opslaan.
    function wonMessage(name) {
        const outputVariable = document.querySelector("#outputString");
        outputVariable.textContent = `${name}, you have won!`;
    } 
    return { 
        name: name, 
        sign: sign, 
        wonMessage: wonMessage
    }
}
