import { flipCoin } from './coin';

window.onload = function() {
  console.log("Let's do this!");
}

const flipButton = document.querySelector('#flipButton');
const resultDiv = document.querySelector("#result");

flipButton.addEventListener('click', function() {
  const result = flipCoin();
  resultDiv.innerHTML = `<h2>${result}</h2>`;
});
