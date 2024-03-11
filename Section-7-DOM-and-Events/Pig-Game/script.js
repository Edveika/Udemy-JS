'use strict';

// Player 0 and 1 HTML objects
const p0Obj = document.querySelector('.player--0');
const p1Obj = document.querySelector('.player--1');
const p0ScoreObj = document.getElementById('score--0');
const p1ScoreObj = document.getElementById('score--1');
const p0CurScoreObj = document.querySelector('#current--0');
const p1CurScoreObj = document.querySelector('#current--1');

// GUI HTML objects
const diceImgObj = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game variables
let curRoller = 0;
let curRollerCurScore = 0;
let score0 = 0;
let score1 = 0;
let diceNum = 0;

// Reset the score
p0ScoreObj.textContent = '0';
p1ScoreObj.textContent = '0';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function updateDiceImg(num) {
  if (num > 6 || num < 1) return;

  if (typeof num !== 'number') return;

  diceImgObj.src = `img/dice-${num}.png`;
}

function rollDice() {
  diceNum = getRandomInt(6);
  updateDiceImg(diceNum);
}

// Dice is rolled to init the diceNum variable and update the image
rollDice();

function switchPlayer() {
  if (curRoller === 0) {
    curRoller = 1;
    p0Obj.classList.remove('player--active');
    p1Obj.classList.add('player--active');
  } else {
    curRoller = 0;
    p1Obj.classList.remove('player--active');
    p0Obj.classList.add('player--active');
  }
}

btnRoll.addEventListener('click', function () {
  rollDice();

  if (curRoller === 0) {
    if (diceNum === 1) {
      switchPlayer();
      curRollerCurScore = 0;
    } else {
      curRollerCurScore = diceNum;
    }
    p0CurScoreObj.textContent = curRollerCurScore;
  } else {
    if (diceNum === 1) {
      switchPlayer();
      curRollerCurScore = 0;
    } else {
      curRollerCurScore = diceNum;
    }
    p1CurScoreObj.textContent = curRollerCurScore;
  }
});

btnHold.addEventListener('click', function () {
  console.log(curRollerCurScore);
  if (curRollerCurScore === 0) return;

  if (curRoller === 0) {
    score0 += curRollerCurScore;
    curRollerCurScore = 0;
    p0ScoreObj.textContent = score0;
    p0CurScoreObj.textContent = 0;
    switchPlayer();
  } else {
    score1 += curRollerCurScore;
    curRollerCurScore = 0;
    p1ScoreObj.textContent = score1;
    p1CurScoreObj.textContent = 0;
    switchPlayer();
  }
});

btnNewGame.addEventListener('click', function () {
  if (curRoller === 1) switchPlayer();

  curRollerCurScore = 0;
  score0 = 0;
  score1 = 0;
  rollDice();
  p0ScoreObj.textContent = 0;
  p1ScoreObj.textContent = 0;
  p0CurScoreObj.textContent = 0;
  p1CurScoreObj.textContent = 0;
});
