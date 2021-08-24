'use strict';
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
let secretNum = getRandomInt(20);
let score = 20;
let highScore = 0;
function win() {
  document.querySelector('.logo-box').textContent = secretNum;
  if (highScore < score) {
    highScore = score;
    document.querySelector('.highscore-count').textContent = highScore;
  }
  document.querySelector('body').style.background =
    'linear-gradient(rgba(50, 248, 24, 0.75), rgba(50, 248, 24, 1))';
  document.querySelector('.logo-box').style.width = '30rem';
}
function eventHandlerCheck() {
  let guess = Number(document.querySelector('.input-guess').value);
  if (!guess) {
    document.querySelector('.p-message').textContent = 'Please enter a number!';
  } else if (score === 0) {
    document.querySelector('.p-message').textContent = 'You lose!';
  } else if (guess === secretNum) {
    score--;
    document.querySelector('.score-count').textContent = score;
    document.querySelector('.p-message').textContent = 'Correct Number!';
    win();
  } else if (guess < secretNum) {
    document.querySelector('.p-message').textContent = 'Guess higher!';
    score--;
    document.querySelector('.score-count').textContent = score;
  } else {
    document.querySelector('.p-message').textContent = 'Guess lower!';
    score--;
    document.querySelector('.score-count').textContent = score;
  }
}

function eventHandlerPlayAgain() {
  score = 20;
  secretNum = getRandomInt(20);
  document.querySelector('.score-count').textContent = 20;
  document.querySelector('.input-guess').value = '';
  document.querySelector('.logo-box').textContent = '?';
  document.querySelector('.p-message').textContent = 'Good luck! 😎';
  document.querySelector('body').style.background =
    'linear-gradient(#555, #222)';
}
document.querySelector('.check').addEventListener('click', eventHandlerCheck);

document
  .querySelector('.play-again')
  .addEventListener('click', eventHandlerPlayAgain);
