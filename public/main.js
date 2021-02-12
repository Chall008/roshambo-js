function updatePlayer1() {
  const player1 = document.querySelector('input.enteredName1').value
  document.querySelector('h2.Player1Name').textContent = player1
  console.log(player1)
}
function updatePlayer2() {
  const player2 = document.querySelector('input.enteredName2').value
  document.querySelector('h2.Player2Name').textContent = player2
  console.log(player2)
}

function main() {}
if (document.querySelector('h2.Player1Name')) {
  document.querySelector('h2.Player1Name').textContent = 'Player 1'
}
if (document.querySelector('h2.Player2Name')) {
  document.querySelector('h2.Player2Name').textContent = 'Player 2'
}
document
  .querySelector('button.enter-name1')
  .addEventListener('click', updatePlayer1)
document
  .querySelector('button.enter-name1')
  .addEventListener('click', updatePlayer2)

document.addEventListener('DOMContentLoaded', main)
