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
function p1ChoosesLizard() {
  player1Choice = 'lizard'
  console.log(player1Choice)
}
function p1ChoosesSpock() {
  player1Choice = 'spock'
  console.log(player1Choice)
}
function p2ChoosesRock() {
  player2Choice = 'rock'
  console.log(player2Choice)
  roshamboGame(player1Choice, player2Choice)
}
function p2ChoosesPaper() {
  player2Choice = 'paper'
  console.log(player2Choice)
  roshamboGame(player1Choice, player2Choice)
}
function p2ChoosesScissor() {
  player2Choice = 'scissors'
  console.log(player2Choice)
  roshamboGame(player1Choice, player2Choice)
}
function p2ChoosesLizard() {
  player2Choice = 'lizard'
  console.log(player2Choice)

  roshamboGame(player1Choice, player2Choice)
}
function p2ChoosesSpock() {
  player2Choice = 'spock'
  console.log(player2Choice)

  roshamboGame(player1Choice, player2Choice)
}

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
function replay() {
  location.reload()
}
function roshamboGame(player1Choice, player2Choice) {
  const player1 = document.getElementById('Player1Name').textContent
  const player2 = document.getElementById('Player2Name').textContent
  if (player1Choice === '' || player2Choice === '') return
  // rock beats scissors & lizard
  // paper beats rock & spock
  // scissors beats paper & lizard
  // lizard beats paper & spock
  // spock beats rock & scissors
  if (player1Choice === player2Choice) {
    window.alert('Draw!')
  } else if (
    (player1Choice === 'scissors' && player2Choice === 'paper') ||
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'paper' && player2Choice === 'rock') ||
    (player1Choice === 'rock' && player2Choice === 'lizard') ||
    (player1Choice === 'lizard' && player2Choice === 'spock') ||
    (player1Choice === 'spock' && player2Choice === 'scissors') ||
    (player1Choice === 'scissors' && player2choice === 'lizard') ||
    (player1Choice === 'lizard' && player2choice === 'paper') ||
    (player1Choice === 'paper' && player2choice === 'spock') ||
    (player1Choice === 'spock' && player2choice === 'rock')
  ) {
    window.alert(`${player1} vaporizes ${player2} with ${player1Choice}`)
  } else {
    window.alert(`${player2} crushes ${player1} with ${player2Choice}!`)
  }
}

function main() {
  const p1RockChoice = document.getElementById('Player1Rock')
  p1RockChoice.addEventListener('click', p1ChoosesRock)

  const p1PaperChoice = document.getElementById('Player1Paper')
  p1PaperChoice.addEventListener('click', p1ChoosesPaper)

  const p1ScissorChoice = document.getElementById('Player1Scissors')
  p1ScissorChoice.addEventListener('click', p1ChoosesScissors)

  const p1LizardChoice = document.getElementById('Player1Lizard')
  p1LizardChoice.addEventListener('click', p1ChoosesLizard)

  const p1SpockChoice = document.getElementById('Player1Spock')
  p1SpockChoice.addEventListener('click', p1ChoosesSpock)

  const p2RockChoice = document.getElementById('Player2Rock')
  p2RockChoice.addEventListener('click', p2ChoosesRock)

  const p2PaperChoice = document.getElementById('Player2Paper')
  p2PaperChoice.addEventListener('click', p2ChoosesPaper)

  const p2ScissorChoice = document.getElementById('Player2Scissors')
  p2ScissorChoice.addEventListener('click', p2ChoosesScissor)

  const p2LizardChoice = document.getElementById('Player2Lizard')
  p2LizardChoice.addEventListener('click', p2ChoosesLizard)

  const p2SpockChoice = document.getElementById('Player2Spock')
  p2SpockChoice.addEventListener('click', p2ChoosesSpock)

  document.getElementById('Player1Name').textContent = 'Player 1'

  document.getElementById('Player2Name').textContent = 'Player 2'

  document
    .getElementById('enter-name1')
    .addEventListener('click', updatePlayer1)
  document
    .getElementById('enter-name2')
    .addEventListener('click', updatePlayer2)

  const replayButton = document
    .getElementById('Replay')
    .addEventListener('click', replay)
}

document.addEventListener('DOMContentLoaded', main)
