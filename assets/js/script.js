document.addEventListener('DOMContentLoaded', function() {

    // Button click function
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            const myInput = this.textContent;

            const opponentOptions = ['Rock', 'Paper', 'Scissors'];
            const opponentInput = opponentOptions[Math.floor(Math.random() * 3)];
        })
    }
})