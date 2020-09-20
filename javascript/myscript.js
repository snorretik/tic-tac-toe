let setUpGame = (function () {
    `use strict`;

    let gameBoard = [];
    let comp = false;
    
    const startRestartButt = document.querySelector("#startRestart");
    startRestartButt.addEventListener('click', (e) => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        // misschien nog meer nodig...
    })

    const opponentTogg = document.querySelector("#opponentToggle");
    opponentTogg.addEventListener('click', (e) => {
        comp = !comp;
        remOrAdd(comp);
    })

    // if comp == false {catch button2}
    // if comp == true {make computer}

    // settings etc...

})();

let playGame = (function () {
    'use strict';
    
    // game loop or whatever...

})();

function Player(name) {
    // factory function

    return {};
}

// -----------------------------------
// additional functions:

function remOrAdd(computerOrNot) {
    const mainDiv = document.querySelector("#settings");

    if (computerOrNot == true) {
        const toggle = document.querySelector("#opponentToggle");
        
        const player2Form = document.querySelector("#player2");
        const play2input = document.querySelector("#namePlayer2");
        const play2Button = document.querySelector("#namePlaySubmit2");
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
        play2input.setAttribute("id", "namePlayer2");
        play2input.setAttribute("type", "text");
        play2input.setAttribute("placeholder", "Player 2 name:")
        play2input.setAttribute("required", "");
        const play2Button = document.createElement("button");
        play2Button.setAttribute("id", "namePlaySubmit2");
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