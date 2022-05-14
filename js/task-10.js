const refs = {
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  containerBoxes: document.querySelector('#boxes'),
}

function itemsAmount() { 
  const amount = refs.input.value;
    createBoxes(amount);
}

function createBoxes(amount) { 
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) { 
    const newBox = document.createElement('div');
    newBox.style.width = `${boxSize}px`; 
    newBox.style.height = `${boxSize}px`; 
    newBox.style.backgroundColor = getRandomHexColor();
    refs.containerBoxes.append(newBox);
    boxSize += 10;
  }
}

function destroyBoxes() { 
  refs.containerBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.createButton.addEventListener('click', itemsAmount)
refs.destroyButton.addEventListener('click', destroyBoxes)
