let myScore = 0;
let opponentScore = 0;

document.addEventListener('DOMContentLoaded', function () {

    // Button click function
    let buttons = document.getElementsByClassName('button')

    for (let button of buttons) {
        button.addEventListener('click', function () {
            const myInput = this.textContent;

            const opponentOptions = ['Rock', 'Paper', 'Scissors'];
            const opponentInput = opponentOptions[Math.floor(Math.random() * 3)];
                
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

function game(myInput, opponentInput) {

    const match = `${myInput} vs ${opponentInput}`;

    if (myInput === opponentInput) {
        alert(`${match} = Draw`);
        
    } else if (
        (myInput === 'Rock' && opponentInput === 'Scissors') ||
        (myInput === 'Paper' && opponentInput === 'Rock') ||
        (myInput === 'Scissors' && opponentInput === 'Paper')
    ) {
        myScore++;
        alert(`${match} = You Win`);
    } else {
        opponentScore++;
        alert(`${match} = Opponent Wins`);
    }
}

function updateScore() {

    document.getElementById('my-score').textContent = myScore;
    document.getElementById('opponent-score').textContent = opponentScore;
}

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

