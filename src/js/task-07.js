const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector('#text');


inputRange.addEventListener('input', onInput);
function onInput(event) {
    console.log(event.target.value);
    inputText.style.fontSize = `${event.target.value}px`;
    
}