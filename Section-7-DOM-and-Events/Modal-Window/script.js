'use strict';

const btnShow = document.querySelectorAll('.show-modal');
const btnHide = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnShow.length; ++i) {
  btnShow[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnHide.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  if (overlay.classList.contains('hidden')) return;

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
