const container = document.querySelector('.container');
const button = document.querySelectorAll('.button');
const messageDisplay = document.querySelector('#messageDisplay');


button.forEach( function (button) {
    button.addEventListener('click', (e) => {  
        const colorCode = e.target.id;
        container.style.backgroundColor = colorCode;
        // Display the copied message with the color code
        displayMessage(`Color code ${colorCode}`);

        if(e.target.id === '#70d6ff'){
            messageDisplay.textContent = '';
        //     container.style.backgroundColor = e.target.id;
        }       
    });
});

// Display the message for a short duration
function displayMessage(message) {
    messageDisplay.textContent = message;
    setTimeout(() => {
        messageDisplay.textContent = '';
    }, 3000);
}