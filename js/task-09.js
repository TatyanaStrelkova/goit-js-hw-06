
const refs = {
  button: document.querySelector('.change-color'),
  textColor: document.querySelector('.color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorBtnClick() { 
  document.body.style.backgroundColor = getRandomHexColor();
  refs.textColor.textContent = getRandomHexColor();
}

refs.button.addEventListener('click', onChangeColorBtnClick)
