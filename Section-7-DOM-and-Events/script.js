'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct number!';
// document.querySelector('.number').textContent = 7331;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.highscore').textContent = 1337;

// document.querySelector('.guess');

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

let number = randomNumber(20);
let curScore = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  if (curScore === 0) return;

  const guessNumber = Number(document.querySelector('.guess').value);

  if (guessNumber === number) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = number;
    if (curScore > highscore) {
      highscore = curScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    --curScore;
    document.querySelector('.score').textContent = curScore;

    if (curScore === 0) {
      document.querySelector('.number').textContent = number;
      document.querySelector('.message').textContent = '😈 You lose!';
    } else {
      if (guessNumber > number) {
        document.querySelector('.message').textContent = 'Try lower!';
      } else {
        document.querySelector('.message').textContent = 'Try higher!';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = randomNumber(20);
  curScore = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = curScore;
});
