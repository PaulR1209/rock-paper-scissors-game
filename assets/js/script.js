document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'reset') {
                alert('You clicked reset!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`you clicked ${gameType}`);
            }
        })
    }
})

// Instructions box

function modal() {

}