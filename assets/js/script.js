document.addEventListener('DOMContentLoaded', function () {

    // Button click function
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            const myInput = this.textContent;

            const opponentOptions = ['Rock', 'Paper', 'Scissors'];
            const opponentInput = opponentOptions[Math.floor(Math.random() * 3)];
        })
    }
})

function game(myInput, opponentInput) {
    
    if (myInput === opponentInput) {
        alert(`${game} Draw`);
        return;
    }

    if (myInput === 'Rock') {
        if (opponentInput === 'Paper') {
            alert(`${game} = Opponent Wins`);
        } else {
            alert(`${game} = You Win`);
        }
    }

    if (myInput === 'Paper') {
        if (opponentInput === 'Scissors') {
            alert(`${game} = Opponent Wins`);
        } else {
            alert(`${game} = You Win`);
        }
    }

    if (myInput === 'Scissors') {
        if (opponentInput === 'Rock') {
            alert(`${game} = Opponent Wins`);
        } else {
            alert(`${game} = You Win`);
        }
    }
}