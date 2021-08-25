'use strict';
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = document.querySelectorAll('.score');
const currScore = document.querySelectorAll('.current-score');
const currScore0 = document.querySelector('#current--0');
const currScore1 = document.querySelector('#current--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let X = 0;
let currP0Score = 0;
let currP1Score = 0;
let totP0Score = 0;
let totP1Score = 0;
let currentScore = 0;
let player0Turn = true;

const reset = () => {
  for (let i = 0; i < scores.length; i++) scores[i].textContent = 0;
  dice.classList.add('hidden');
  currScore0.textContent = 0;
  currScore1.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
const roll = () => {
  if (dice.classList.contains('hidden')) dice.classList.remove('hidden');
  X = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute('src', `dice-${X}.png`);
  calculatePlayerScore();
};
const resetCurrents = function () {
  currP0Score = 0;
  currP1Score = 0;
  currScore[0].textContent = 0;
  currScore[1].textContent = 0;
};
const hold = () => {
  if (player0Turn) {
    totP0Score += currP0Score;
    score0.textContent = totP0Score;
  } else {
    totP1Score += currP1Score;
    score1.textContent = totP1Score;
  }
  resetCurrents();
  player0Turn = !player0Turn;
  switchTurn();
};
const calculatePlayerScore = function () {
  if (player0Turn) {
    currP0Score += X;
    currScore0.textContent = currP0Score;
  } else {
    currP1Score += X;
    currScore1.textContent = currP1Score;
  }
  if (X === 1) {
    player0Turn = !player0Turn;
    resetCurrents();
    switchTurn();
  }
};
const startGame = function () {
  btnNewGame.addEventListener('click', reset);
  btnRoll.addEventListener('click', roll);
  btnHold.addEventListener('click', hold);
};
const switchTurn = function () {
  if (player0Turn) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  } else {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  }
};

startGame();
