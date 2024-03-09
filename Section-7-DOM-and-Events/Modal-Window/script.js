'use strict';

const btnShow = document.querySelectorAll('.show-modal');
const btnHide = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnShow.length; ++i) {
  btnShow[i].addEventListener('click', function () {
    openModal();
  });
}

btnHide.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (event) {
  if (modal.classList.contains('hidden')) return;

  if (event.key === 'Escape') closeModal();
});
