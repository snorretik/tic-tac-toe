let setUpGame = (function () {
    `use strict`;

    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let comp = false;
    let player1Name = "";
    let player2Name = "";
    let entered1 = false;
    let entered2 = false;

    setEventPlayer2();
    
    const startRestartButt = document.querySelector("#startRestart");
    startRestartButt.addEventListener('click', (e) => {
        const inputText1 = document.querySelector("#input1");
        const inputText2 = document.querySelector("#input2");

        gameBoard = ["", "", "", "", "", "", "", "", ""];
        comp = false;

        player1Name = "";
        player2Name = "";
        inputText1.setAttribute("placeholder", "Player 1 name:");
        inputText2.setAttribute("placeholder", "Player 2 name:");

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

    const getPlayerName1 = document.querySelector("#button1");
    getPlayerName1.addEventListener('click', (e) => {
        const inputText1 = document.querySelector("#input1");
        player1Name = inputText1.value;
        inputText1.setAttribute("placeholder", player1Name);
        inputText1.value = "";

        entered1 = true;
    })

    function remOrAdd(computerOrNot) {
        const mainDiv = document.querySelector("#settings");
    
        if (computerOrNot == true) {
            const toggle = document.querySelector("#opponentToggle");
            
            const input2 = document.querySelector("#input2");
            const button2 = document.querySelector("#button2");
            const breakPlay21 = document.querySelector("#breakPlay21");
            const breakPlay22 = document.querySelector("#breakPlay22");

            removeEventPlayer2();

            mainDiv.removeChild(input2);
            mainDiv.removeChild(button2);
            mainDiv.removeChild(breakPlay21);
            mainDiv.removeChild(breakPlay22);

            toggle.textContent = "Against player 2";

        } else if (computerOrNot == false) {
            const toggle = document.querySelector("#opponentToggle");

            const play = document.querySelector("#play");
            
            const input2 = document.createElement("input");
            input2.setAttribute("id", "input2");
            input2.setAttribute("type", "text");
            input2.setAttribute("placeholder", "Player 2 name:")
            input2.setAttribute("required", "");
            const button2 = document.createElement("button");
            button2.setAttribute("id", "button2");
            button2.setAttribute("type", "submit");
            button2.textContent = "submit";
            button2.style.cssText = "margin: 0px 0px 0px 4px";
            const breakPlay21 = document.createElement("br");
            breakPlay21.setAttribute("id", "breakPlay21");
            const breakPlay22= document.createElement("br");
            breakPlay22.setAttribute("id", "breakPlay22");

            mainDiv.insertBefore(input2, play);
            mainDiv.insertBefore(button2, play);
            mainDiv.insertBefore(breakPlay21, play);
            mainDiv.insertBefore(breakPlay22, play);

            setEventPlayer2();

            toggle.textContent = "Against computer";
    
        } else {
            console.log(computerOrNot);
        }
    }

    function setEventPlayer2 () {
        const getPlayerName2 = document.querySelector("#button2");
        getPlayerName2.addEventListener('click', eventFunction);
    }

    function removeEventPlayer2 () {
        const getPlayerName2 = document.querySelector("#button2");
        getPlayerName2.removeEventListener('click', eventFunction);
    }

    function eventFunction () {
        const inputText2 = document.querySelector("#input2");
        player2Name = inputText2.value;
        inputText2.setAttribute("placeholder", player2Name);
        inputText2.value = "";

        entered2 = true;
    }

})();

(function () {
    'use strict';

})();

function player(name) {
    // factory function

    return { name };
}


// -----------------------------------
// additional functions:

function displayBoard() {

}