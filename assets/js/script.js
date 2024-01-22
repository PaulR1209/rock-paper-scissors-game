document.addEventListener('DOMContentLoaded', function () {

    // Button click function
    let buttons = document.getElementsByClassName('button')
    let myScore = 0;
    let opponentScore = 0;

    for (let button of buttons) {
        button.addEventListener('click', function () {
            const myInput = this.textContent;

            const opponentOptions = ['Rock', 'Paper', 'Scissors'];
            const opponentInput = opponentOptions[Math.floor(Math.random() * 3)];
                
            game(myInput, opponentInput);
        });
    }
});

function game(myInput, opponentInput) {

    const match = `${myInput} vs ${opponentInput}`;

    if (myInput === opponentInput) {
        console.log(`${match} = Draw`);
        
    } else if (
        (myInput === 'Rock' && opponentInput === 'Scissors') ||
        (myInput === 'Paper' && opponentInput === 'Rock') ||
        (myInput === 'Scissors' && opponentInput === 'Paper')
    ) {
        console.log(`${match} = You Win`);
    } else {
        console.log(`${match} = Opponent Wins`);
    }
}