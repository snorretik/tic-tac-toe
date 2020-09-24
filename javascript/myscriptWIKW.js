(function() {
    // variables
    // _private
    // public

    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let _play = false;
    let _comp = false;
    let _player1Name = "";
    let _player2Name = "";

    function setButtons() {
        // second in line I think... after setSubmitButtons
        const clickMoves = Array.from(document.querySelectorAll(".vakjes"));
        for (let i = 0; i < clickMoves.length; i++) {
            clickMoves[i].addEventListener('click', (e) => {
                let player = firstMove();

                if (_play == true) {
                    if (player.length == 1) {
                        // singleplayer game
                    } else if (player.length == 2) {
                        // multiplayer game
                    }

                } else if (_play == false) {
                    // niks

                } else {
                    console.log(_play);
                }
            })
        }
    }

    function firstMove() {
        if (_play == false) {

            if ((_player1Name != "") && (_player2Name != "")) {
                const player1 = player(_player1Name, "X", true);
                const player2 = player(_player2Name, "O", false);
                
                _play = true;

                return {
                    player1: player1,
                    player2: player2,
                }
            } else if ((_player1Name != "") && (_comp == true)) {
                const player1 = player(_player1Name, "X", true);

                _play = true;

                return {
                    player1: player1
                }
                
            } else if ((_player1Name == "") && (_comp == true)) {
                const player1 = player("Anonymous", "X", true);
                
                _play = true;

                return {
                    player1: player1
                }

            } else if ((((_player1Name != "") && (_player2Name == "")) && (_comp == "false")) || (((_player1Name == "") && (_player2Name != "")) && (comp == "false"))) {
                _play = false;
            }
        }
    }

    function startRestart() {
        
    }

    function setSubmitButtons() {
        // moet al voor het spel start
        const button1 = document.querySelector("#button1");
        const button2 = document.querySelector("#button2");

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
    }


})();

(function(turn) {
    // computer AI
    function wonMessage() {
        const outputVariable = document.querySelector("#outputString");
        outputVariable.textContent = "Computer has won!";
    }
    return {
        turn: turn,
        wonMessage: wonMessage
    }
})();

function player(name, sign, turn) {
    // maybe do some more...
    function wonMessage(name) {
        const outputVariable = document.querySelector("#outputString");
        outputVariable.textContent = `${name}, you have won!`;
    } 
    return { 
        name: name, 
        sign: sign, 
        turn: turn,
        wonMessage: wonMessage
    }
}