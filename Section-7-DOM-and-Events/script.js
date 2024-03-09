'use strict';

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

let number = randomNumber(20);
let curScore = 20;
let highscore = 0;
let won = false;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (curScore === 0 || won) return;

  if (!guessNumber || guessNumber > 20 || guessNumber < 1) {
    document.querySelector('.message').textContent = '🛑 Input a valid number!';
    return;
  }

  if (guessNumber === number) {
    won = true;
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
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
      document.querySelector('body').style.backgroundColor = '#c92a2a';
    } else {
      if (guessNumber > number) {
        document.querySelector('.message').textContent = '⬇️ Try lower!';
      } else {
        document.querySelector('.message').textContent = '⬆️ Try higher!';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = randomNumber(20);
  curScore = 20;
  won = false;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = curScore;
  document.querySelector('body').style.backgroundColor = '#222';
});
