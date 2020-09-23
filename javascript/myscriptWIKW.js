(function() {
    // variables
    // _private
    // public

    let _play = false;

    const clickMoves = Array.from(document.querySelectorAll(".vakjes"));
    clickMoves.forEach((button) => {
        button.addEventListener('click', (e) => {
            // weet nog niet...
        })
    })

    function firstMove() {
        // handle the names etc...
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