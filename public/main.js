let player1Choice = ''
let player2Choice = ''

function p1ChoosesRock() {
  player1Choice = 'rock'
  console.log(player1Choice)
}
function p1ChoosesPaper() {
  player1Choice = 'paper'
  console.log(player1Choice)
}
function p1ChoosesScissors() {
  player1Choice = 'scissors'
  console.log(player1Choice)
}
// function p1ChoiceLizard(){}
// function p2ChoiceSpock(){}
function p2ChoosesRock() {
  player2Choice = 'rock'
  console.log(player2Choice)
}
function p2ChoosesPaper() {
  player2Choice = 'paper'
  console.log(player2Choice)
}
function p2ChoosesScissor() {
  player2Choice = 'scissors'
  console.log(player2Choice)
}
// function p2ChoiceLizard()
// function p2ChoiceSpock()

function updatePlayer1() {
  const player1 = document.getElementById('enteredName1').value
  document.getElementById('Player1Name').textContent = player1
  console.log(player1)
}
function updatePlayer2() {
  const player2 = document.getElementById('enteredName2').value
  document.getElementById('Player2Name').textContent = player2
  console.log(player2)
}
// function replay() {
//   location.reload(true)
// }

function main() {
  const p1RockChoice = document.getElementById('Player1Rock')
  p1RockChoice.addEventListener('click', p1ChoosesRock)

  const p1PaperChoice = document.getElementById('Player1Paper')
  p1PaperChoice.addEventListener('click', p1ChoosesPaper)

  const p1ScissorChoice = document.getElementById('Player1Scissors')
  p1ScissorChoice.addEventListener('click', p1ChoosesScissors)

  const p2RockChoice = document.getElementById('Player2Rock')
  p2RockChoice.addEventListener('click', p2ChoosesRock)

  const p2PaperChoice = document.getElementById('Player2Paper')
  p2PaperChoice.addEventListener('click', p2ChoosesPaper)

  const p2ScissorChoice = document.getElementById('Player2Scissors')
  p2ScissorChoice.addEventListener('click', p2ChoosesScissor)

  if (document.getElementById('Player1Name')) {
    document.getElementById('Player1Name').textContent = 'Player 1'
  }
  if (document.getElementById('Player2Name')) {
    document.getElementById('Player2Name').textContent = 'Player 2'
  }
  document
    .getElementById('enter-name1')
    .addEventListener('click', updatePlayer1)
  document
    .getElementById('enter-name2')
    .addEventListener('click', updatePlayer2)

  // document.querySelector('').addEventListener('click')
  // document.querySelector('').addEventListener('click')
  // document.querySelector('').addEventListener('click')
  // document.querySelector('').addEventListener('click')
  // document
  // .querySelector('')
  // .addEventListener('click', )

  // document.querySelector('').addEventListener('click')
  // document.querySelector('').addEventListener('click')
  // document.querySelector('').addEventListener('click')
  // document.querySelector('').addEventListener('click')
  // document
  // .querySelector('')
  // .addEventListener('click', )

  // const replayButton = document
  //   .querySelector('#Replay')
  //   .addEventListener('click', replay)
}

document.addEventListener('DOMContentLoaded', main)
