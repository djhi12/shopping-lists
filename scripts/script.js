const addItems = [];

function createButton(classes, id) {
    const button = document.createElement('button');
    button.textContent = 'Button';
    button.className = classes; // Use the passed-in class
    button.id = id; // Use the passed-in id

    document.body.appendChild(button); // Append the button to the document body
    return button; // Return the created button
}

function main() {
    const button = createButton('button', 'button');
    // console.log(button);
}

main();

