const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("input");
const messageEl = document.querySelector(".message");
const errorEl = document.querySelector(".error");

btnEl.addEventListener('click',displayMessage);

function displayMessage(){
if(inputEl.value){
    messageEl.innerHTML = inputEl.value;
    inputEl.value = ''
}
}