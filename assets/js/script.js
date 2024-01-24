
// set value of scores
let myScore = 0;
let opponentScore = 0;

document.addEventListener('DOMContentLoaded', function () {

    // button click funtion for instructions and reset buttons

    document.getElementById("resetScore").addEventListener("click", resetScore);
    document.getElementById("instructions").addEventListener("click", instructions);
    modalBox();

    // Button click function for game
    let buttons = document.getElementsByClassName('button')
    let options = ['Rock', 'Paper', 'Scissors'];

    for (let button of buttons) {
        button.addEventListener('click', function () {
            const myInput = button.getAttribute('data-choice');

            // computer input which chooses randomly

            const opponentInput = options[Math.floor(Math.random() * 3)];
                
            updateResultImage(myInput, opponentInput);
            game(myInput, opponentInput);
            updateScore();

            if(checkWinner()) {
                myScore = 0;
                opponentScore = 0;
                updateScore();
            }
        });
    }
});

/** This function compares the input of the user and computer and determines result */
function game(myInput, opponentInput) {

    const match = `${myInput} vs ${opponentInput}`;

    if (myInput === opponentInput) {
        
    } else if (
        (myInput === 'Rock' && opponentInput === 'Scissors') ||
        (myInput === 'Paper' && opponentInput === 'Rock') ||
        (myInput === 'Scissors' && opponentInput === 'Paper')
    ) {
        myScore++;
    } else {
        opponentScore++;
    }
}

/**
 * This updates the scores on the HTML page
 */
function updateScore() {

    document.getElementById('my-score').textContent = myScore;
    document.getElementById('opponent-score').textContent = opponentScore;
}

/** checks if player or computer has 5 points. 
 * If either reach 5 points, they win, if not the loop starts again */
function checkWinner() {
    if (myScore === 5 || opponentScore === 5) {
        let winner;

        if (myScore === 5) {
            winner = 'You Win!';
        } else {
            winner = 'You Lose...';
        }

        alert(winner);

        return true;

        
    }

    return false;
}

/** changes the image based on player and computer input */
function updateResultImage(myInput, opponentInput) {

    document.getElementById('my-input-img').src = `assets/images/${myInput}.png`
    document.getElementById('opp-input-img').src = `assets/images/${opponentInput}.png`
}

/** resets the score to 0-0 upon clicking the reset button */
function resetScore() {
    myScore = 0;
    opponentScore = 0;
    updateScore();
}

/** opens and closes the instrcutions when clicking the instructions button */
function modalBox() {
    let modal = document.getElementById('my-modal');
    let button = document.getElementById('instructions');
    let close = document.getElementById('close');

    button.onclick =function() {
        modal.style.display = 'block';
    }

    close.onclick = function() {
        modal.style.display = 'none';
    }
}