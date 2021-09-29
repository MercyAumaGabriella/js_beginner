//Changing the text content and text color within a paragragh
// const changeText = () => {
//     const pr = document.querySelector('p');
//     //pr.textContent = "I changed because of an inline event handler.";

//     //displaying the text in a div
//     const div = document.querySelector('div');
//     div.style.color = "green";
//     div.textContent = "I changed because of an inline event handler.";
//     div.style.border = "1px solid darkgrey";
// }

// const clear = () => {
//     const pClear = document.getElementById('div');
//     pClear.textContent.clear;
// }

//event listener
const button1 = document.getElementById("button");
const button2 = document.getElementById('button2');
const p = document.getElementById("pr");

const Listener = () => {
    p.textContent = "Hey there, I am an event listener."
}

//the function is a callback
button1.addEventListener('click',Listener);

//ALERT
const alert_text = () => {
    alert('Alerted Because of an Event Listener');
}

const btn2 = () => {
   confirm('form submitted');
}

//button2.addEventListener('dbclick',alert_text);
button2.addEventListener('focus',btn2);