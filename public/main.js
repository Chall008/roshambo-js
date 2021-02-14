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
// function p1ChoosesLizard(){}
// function p2ChoosesSpock(){}
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
// function p2ChoosesLizard()
// function p2ChoosesSpock()

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

  // const p1LizardChoice = document.getElementById('Player1Lizard')
  // p1LizardChoice.addEventListener('click', p1ChoosesLizard)

  // const p1SpockChoice = document.getElementById('Player1Spock')
  // p1SpockChoice.addEventListener('click', p1ChoosesSpock)

  const p2RockChoice = document.getElementById('Player2Rock')
  p2RockChoice.addEventListener('click', p2ChoosesRock)

  const p2PaperChoice = document.getElementById('Player2Paper')
  p2PaperChoice.addEventListener('click', p2ChoosesPaper)

  const p2ScissorChoice = document.getElementById('Player2Scissors')
  p2ScissorChoice.addEventListener('click', p2ChoosesScissor)

  // const p2LizardChoice = document.getElementById('Player2Lizard')
  // p2SpockChoice.addEventListener('click', p2ChoosesLizard)

  // const p2SpockChoice = document.getElementById('Player2Spock')
  // p2SpockChoice.addEventListener('click', p2ChoosesSpock)

  if (document.getElementById('Player1Name')) {
    document.getElementById('Player1Name').textContent = 'Player 1'
  }

  if (document.getElementById('Player2Name')) {
    document.getElementById('Player2Name').textContent = 'Player 2'
  }

  // if (player1Choice === player2Choice) {
  //   return window.alert(`The result is a tie`)
  // }
  // } else if (player1Choice == p1ChoosesRock)
  //   if (player2Choice == p2ChoosesScissor) return ``
  //   else return 'paper wins'
  // else if (player1Choice == 'paper') {
  //   if (player2Choice == 'rock') return 'paper wins'
  //   else return 'scissors wins'
  // } else if (player1Choice == 'scissors')
  //   if (player2Choice == 'rock') return 'rock wins'
  //   else return 'scissors wins'

  document
    .getElementById('enter-name1')
    .addEventListener('click', updatePlayer1)
  document
    .getElementById('enter-name2')
    .addEventListener('click', updatePlayer2)

  //   const replayButton = document
  //     .querySelector('#Replay')
  //     .addEventListener('click', replay)
}

document.addEventListener('DOMContentLoaded', main)
