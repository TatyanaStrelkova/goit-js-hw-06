const textInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function onInputChange(event) { 
    if (event.currentTarget.value === '') {
        nameOutput.textContent = 'Anonymous';
        return;
     }
    nameOutput.textContent =  event.currentTarget.value
}

textInput.addEventListener('input', onInputChange)