'use strict';

// Player 0 and 1 HTML elements
const p0El = document.querySelector('.player--0');
const p1El = document.querySelector('.player--1');
const p0ScoreEl = document.getElementById('score--0');
const p1ScoreEl = document.getElementById('score--1');
const p0CurScoreEl = document.querySelector('#current--0');
const p1CurScoreEl = document.querySelector('#current--1');

// GUI HTML objects
const diceImg = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game variables
let curRoller = 0;
let curRollerCurScore = 0;
let scores = [0, 0];
let gameOver = false;

// Reset the score
p0ScoreEl.textContent = '0';
p1ScoreEl.textContent = '0';

// hide dice
diceImg.classList.add('hidden');

function updateDiceImg(num) {
  if (num > 6 || num < 1) return;

  if (typeof num !== 'number') return;

  if (diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');

  diceImg.src = `img/dice-${num}.png`;
}

function rollDice() {
  const diceNum = Math.floor(Math.random() * 6) + 1;
  updateDiceImg(diceNum);
  return diceNum;
}

function switchPlayer() {
  document
    .querySelector(`.player--${curRoller}`)
    .classList.remove('player--active');

  curRoller = curRoller === 0 ? 1 : 0;

  document
    .querySelector(`.player--${curRoller}`)
    .classList.add('player--active');
}

btnRoll.addEventListener('click', function () {
  if (gameOver) return;

  const diceNum = rollDice();

  if (diceNum === 1) curRollerCurScore = 0;
  else curRollerCurScore += diceNum;

  document.querySelector(`#current--${curRoller}`).textContent =
    curRollerCurScore;

  if (diceNum === 1) switchPlayer();
});

btnHold.addEventListener('click', function () {
  if (gameOver) return;

  if (curRollerCurScore === 0) return;

  scores[curRoller] += curRollerCurScore;
  curRollerCurScore = 0;
  document.getElementById(`score--${curRoller}`).textContent =
    scores[curRoller];
  document.getElementById(`current--${curRoller}`).textContent = 0;
  if (scores[curRoller] >= 100) {
    gameOver = true;
    document
      .querySelector(`.player--${curRoller}`)
      .classList.add('player--winner');
  } else {
    switchPlayer();
  }
});

btnNewGame.addEventListener('click', function () {
  if (curRoller === 1) switchPlayer();

  for (let i = 0; i < scores.length; ++i) {
    if (
      document
        .querySelector(`.player--${i}`)
        .classList.contains('player--winner')
    )
      document
        .querySelector(`.player--${i}`)
        .classList.remove('player--winner');
  }

  curRollerCurScore = 0;
  scores = [0, 0];
  diceImg.classList.add('hidden');
  p0ScoreEl.textContent = 0;
  p1ScoreEl.textContent = 0;
  p0CurScoreEl.textContent = 0;
  p1CurScoreEl.textContent = 0;
  gameOver = false;
});
