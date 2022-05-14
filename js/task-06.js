const refs = {
    input: document.querySelector('#validation-input'),
    inputLength: document.querySelector('input[data-length]'),
}

function onInputBlur(event) {
    if (event.currentTarget.value.length === +refs.inputLength.dataset.length) {
        refs.input.classList.add('valid');
    }
    else { 
        refs.input.classList.add('invalid');
    }
}

refs.input.addEventListener('blur', onInputBlur)
 

