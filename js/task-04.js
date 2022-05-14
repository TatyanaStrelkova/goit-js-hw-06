let counterValue = 0;

const refs = {
    btnValue: document.querySelector('#value'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
}

function onDecrementBtnClick() { 
    counterValue -= 1;
    refs.btnValue.textContent = counterValue;
}

function onIncrementBtn() { 
    counterValue += 1;
    refs.btnValue.textContent = counterValue;
}

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtn)


