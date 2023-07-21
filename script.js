const inputBox = document.getElementById('inputbox');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (buttonText === '=') {
      calculate();
    } else if (buttonText === 'C') {
      clearInput();
    } else {
      updateInput(buttonText);
    }
  });
});

function calculate() {
    let result;
    try {
      result = eval(inputBox.value);
    } catch (error) {
      result = 'Error';
    }
    inputBox.value = result;
  }
  

function updateInput(value) {
  inputBox.value += value;
}

function clearInput() {
  inputBox.value = '';
}

