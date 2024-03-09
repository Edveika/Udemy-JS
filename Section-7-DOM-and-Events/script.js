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
  if (Number(document.querySelector('.guess').value) === number) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    if (curScore > highscore) {
      highscore = curScore;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.number').textContent = number;
      // Green background
    }
  } else {
    // if score is 0, end game, red background
    --curScore;
    document.querySelector('.message').textContent = '💥 Try again!';
    document.querySelector('.score').textContent = curScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = randomNumber(20);
});
