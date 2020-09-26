let game = (function() {
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
            clickMoves[i].addEventListener('click', (e) => {
                firstMove();

                if ((_comp == true) && (_play == true)) {
                    // singleplayer game
                    // hoeft geen while knop. Het wordt gespeeld door opeenvolgens knoppen te drukken, dus dit fired elke keer.
                    if ((play1Turn == true) && (clickMoves[i].textContent == "")) {
                        const buttonHTML = document.querySelector(`#number${i + 1}`);
                        buttonHTML.textContent = player1.sign;
                        gameBoard[i] = player1.sign;
        
                        if (checkIfWon(player1.sign)) {
                            player1.wonMessage();
                            startRestart();
                        } else if (!checkIfWon(player1.sign)) {
                            play1Turn = false;
                            // computer turn, and inside set play1Turn true again
                            comp.playCompTurn();
                            if (checkIfWon(comp.compSign)) {
                                comp.compWonMessage();
                                startRestart();
                            }
                        } else {
                            console.log(checkIfWon(player1.sign));
                        }
                    }
        
                } else if ((_comp == false) && (_play == true)) {
                    // multiplayer game
                }
                else if (_play == false) {
                    // niks...?
                }
            });
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
                _player1Name = "Anonymous";
                player1 = player(_player1Name, "X");
                
                _play = true;

            } else if ((((_player1Name != "") && (_player2Name == "")) && (_comp == "false")) || (((_player1Name == "") && (_player2Name != "")) && (comp == "false"))) {
                _play = false;
            } else {
                console.log("Hello");
                // kan zijn dat dit leeg moet zijn
            }
        } else {
            console.log(_play);

            // kan zijn dat dit leeg moet zijn
        }
    }

    // function playClickFunction(number) {
    //     firstMove();

    //     if ((_comp == true) && (_play == true)) {
    //         // singleplayer game
    //         // hoeft geen while knop. Het wordt gespeeld door opeenvolgens knoppen te drukken, dus dit fired elke keer.
    //         if (play1Turn == true) {
    //             const buttonHTML = document.querySelector(`#number${number + 1}`);
    //             buttonHTML.textContent = player1.sign;
    //             gameBoard[i] = player1.sign;

    //             if (checkIfWon(player1.sign)) {
    //                 player1.wonMessage();
    //                 startRestart();
    //             }
    //             play1Turn = false;
    //             // computer turn, and inside set play1Turn true again
    //             playCompTurn();
    //             if (checkIfWon(compSign)) {
    //                 compWonMessage();
    //                 startRestart();
    //             }
    //         }

    //     } else if ((_comp == false) && (_play == true)) {
    //         // multiplayer game
    //     }
    //     else if (_play == false) {
    //         // niks...?
    //     }
    // }

    function switchTurn() {
        play1Turn = !play1Turn;
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
            console.log(input1);
            if (input1.value != "") {
                _player1Name = input1.value;
                input1.setAttribute("placeholder", _player1Name);
                input1.value = "";
            }
        })

        button2.addEventListener('click', eventButton2);

        compToggle.addEventListener('click', (e) => {
            if (_comp == false) {
                _comp = !_comp;
                remOrAdd(_comp);
            } else if (_comp == true) {
                _comp = !_comp;
                remOrAdd(_comp);
            } else {
                console.log(_comp);
            }
        })
    }

    function eventButton2() {
        const input2 = document.querySelector("#input2");
        // console.log(input2);
        if (input2.value != "") {
            _player2Name = input2;
            input2.setAttribute("placeholder", _player2Name);
            input2.value = "";
        }
    }

    function remOrAdd(computerOrNot) {
        const mainDiv = document.querySelector("#settings");
    
        if (computerOrNot == true) {
            const toggle = document.querySelector("#opponentToggle");
            
            const input2 = document.querySelector("#input2");
            const button2 = document.querySelector("#button2");
            const breakPlay21 = document.querySelector("#breakPlay2numb1");
            const breakPlay22 = document.querySelector("#breakPlay2numb2");

            button2.removeEventListener('click', eventButton2());

            mainDiv.removeChild(input2);
            mainDiv.removeChild(button2);
            mainDiv.removeChild(breakPlay21);
            mainDiv.removeChild(breakPlay22);

            toggle.textContent = "Against player 2";

        } else if (computerOrNot == false) {
            const toggle = document.querySelector("#opponentToggle");
            
            const outputString = document.querySelector("#outputString");

            const input2 = document.createElement("input");
            input2.setAttribute("id", "input2");
            input2.setAttribute("type", "text");
            input2.setAttribute("placeholder", "Player 2 name:")
            //input2.setAttribute("required", "");
            const button2 = document.createElement("button");
            button2.setAttribute("id", "button2");
            button2.setAttribute("type", "submit");
            button2.textContent = "submit";
            button2.style.cssText = "margin: 0px 0px 0px 4px";
            const breakPlay21 = document.createElement("br");
            breakPlay21.setAttribute("id", "breakPlay2numb1");
            const breakPlay22= document.createElement("br");
            breakPlay22.setAttribute("id", "breakPlay2numb2");

            mainDiv.insertBefore(input2, outputString);
            mainDiv.insertBefore(button2, outputString);
            mainDiv.insertBefore(breakPlay21, outputString);
            mainDiv.insertBefore(breakPlay22, outputString);

            button2.addEventListener('click', eventButton2());

            toggle.textContent = "Against computer";
    
        } else {
            console.log(computerOrNot);
        }
    }

    return {
        gameBoard: gameBoard,
        player1: player1,
        player2: player2,
        play1Turn: play1Turn,
        switchTurn: switchTurn,
        setSubmitButtons: setSubmitButtons,
        setButtons: setButtons
    }

})();

let comp = (function() {
    function playCompTurn () {
        let makeChoice = true;

        let number = (Math.floor((Math.random() * 10) + 1) - 1);

        while (makeChoice) {
            if ((game.gameBoard).indexOf("") == -1) {
                const output = document.querySelector("#outputString");
                output.textContent = "It is a draw!";
                makeChoice = false;
            } else {
                if (game.gameBoard[number] == "") {
                    const buttonHTML = document.querySelector(`#number${number + 1}`);
                    buttonHTML.textContent = "O";
                    game.gameBoard[number] = "O";
    
                    game.switchTurn();
                    makeChoice = false;
                } else if (game.gameBoard[number] != "") {
                    number = (Math.floor((Math.random() * 10) + 1) - 1);
                }
            }
        }
    }

    function compWonMessage() {
        const outputVariable = document.querySelector("#outputString");
        outputVariable.textContent = "Computer has won!";
    }
    return {
        compSign: "O",
        compWonMessage: compWonMessage,
        playCompTurn: playCompTurn
    }
})();

function player(name, sign) {
    // maybe do some more...
    // misschien variabelen nog opslaan.
    function wonMessage() {
        const outputVariable = document.querySelector("#outputString");
        outputVariable.textContent = `${name}, you have won!`;
    } 
    return { 
        name: name, 
        sign: sign, 
        wonMessage: wonMessage
    }
}

game.setSubmitButtons();
game.setButtons();

