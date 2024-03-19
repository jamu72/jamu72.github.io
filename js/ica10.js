const button = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const text = document.querySelector("h1");
button.addEventListener('click', changeText);
button2.addEventListener('click', changeButtonText);

function changeText(){
    const input = prompt("What do you want the text to say");
    text.textContent = `${input}`;
}

function changeButtonText(){
    button2.textContent = prompt("What do you want the button to say");
}