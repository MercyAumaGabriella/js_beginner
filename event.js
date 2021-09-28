//Changing the text content and text color within a paragragh
const changeText = () => {
    const pr = document.querySelector('p');
    //pr.textContent = "I changed because of an inline event handler.";

    //displaying the text in a div
    const div = document.querySelector('div');
    div.style.color = "green";
    div.textContent = "I changed because of an inline event handler.";
    div.style.border = "1px solid darkgrey";
}

const clear = () => {
    const pClear = document.getElementById('div');
    pClear.textContent.clear;
}