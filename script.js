'use strict';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let score = 20;
let highScore = 0;
let end = 10;
document.querySelector('.end').value = 10;
let secretNum = getRandomInt(1, 10);
document.querySelector('.endNum-btn').addEventListener('click', () => {
  end = document.querySelector('.end').value;
  secretNum = getRandomInt(1, end);
});

function win() {
  document.querySelector('.p-message').textContent = 'Correct Number!';
  document.querySelector('.logo-box').textContent = secretNum;
  if (highScore < score) {
    highScore = score;
    document.querySelector('.highscore-count').textContent = highScore;
  }
  document.querySelector('body').style.background =
    'linear-gradient(rgba(50, 248, 24, 0.75), rgba(50, 248, 24, 1))';
  document.querySelector('.logo-box').style.width = '30rem';
}
const message = (selector, val) =>
  (document.querySelector(selector).textContent = val);

function eventHandlerCheck() {
  gameLogic();
}

function gameLogic() {
  let guess = Number(document.querySelector('.input-guess').value);
  if (!guess || score === 1) {
    message('.score-count', 0);
    message('.p-message', !guess ? 'You must enter a guess!' : 'You loose!');
  } else {
    score--;
    message('.score-count', score);
    if (guess === secretNum) win();
    else message('.p-message', guess > secretNum ? 'Too high!' : 'Too low!');
  }
}

function eventHandlerPlayAgain() {
  resetGame();
}
function resetGame() {
  score = 20;
  secretNum = getRandomInt(1, 10);
  message('.score-count', 20);
  message('.logo-box', '?');
  message('.p-message', 'Good luck! 😎');
  document.querySelector('.input-guess').value = '';
  document.querySelector('.end').value = 10;
  document.querySelector('body').style.background =
    'linear-gradient(#555, #222)';
  document.querySelector('.logo-box').style.width = '15rem';
}
function playGame() {
  document.querySelector('.check').addEventListener('click', eventHandlerCheck);
  document
    .querySelector('.play-again')
    .addEventListener('click', eventHandlerPlayAgain);
}
playGame();
