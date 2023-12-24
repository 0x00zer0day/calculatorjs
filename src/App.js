
const display = document.querySelector('form input[name="display"]')
const buttons = document.querySelectorAll('form input[type="button"]')

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    handleButtonClick(this.value)
  })
})

function handleButtonClick(value){
  switch (value){
    case 'AC':
      clearDisplay();
      break;

    case 'DEL':
      deleteChar();
      break;

    case '=':
      calculate();
      break;

    default:
      appendValue(value);
      break;
  }
}

function clearDisplay(){
  display.value = '';
}

function deleteChar(){
  display.value = display.value.slice(0,-1)
}

function appendValue(value){
  display.value += value;
}

function calculate(){
  display.value = eval(display.value)
}
