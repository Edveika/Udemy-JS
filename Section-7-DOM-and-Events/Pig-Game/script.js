'use strict';

// Player 0 and 1 HTML objects
const p0Obj = document.querySelector('.player--0');
const p1Obj = document.querySelector('.player--1');
const p0ScoreObj = document.querySelector('#score--0');
const p1ScoreObj = document.querySelector('#score--1');
const p0CurScoreObj = document.querySelector('#current--0');
const p1CurScoreObj = document.querySelector('#current--1');

// GUI HTML objects
const diceImgObj = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let curRoller = 0;
let diceNum = getRandomInt(6);
p0ScoreObj.textContent = '0';
p1ScoreObj.textContent = '0';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function updateDiceImg(num) {
  if (num > 6 || num < 1) return;

  diceImgObj.src = `img/dice-${num}.png`;
}

function rollDice() {
  diceNum = getRandomInt(6);
  updateDiceImg(diceNum);
}

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
      p0CurScoreObj.textContent = 0;
    } else {
      p0CurScoreObj.textContent = diceNum;
    }
  } else {
    if (diceNum === 1) {
      switchPlayer();
      p1CurScoreObj.textContent = 0;
    } else {
      p1CurScoreObj.textContent = diceNum;
    }
  }
});

btnHold.addEventListener('click', function () {});

btnNewGame.addEventListener('click', function () {});
