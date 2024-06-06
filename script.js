'use strict';

const hiddenWorks = document.querySelectorAll('.hidden');
const showWorkBtn = document.querySelector('.show_btn');

showWorkBtn.addEventListener('click', function () {
  hiddenWorks.forEach((el) => {
    el.classList.toggle('hide');
  });
  if (hiddenWorks[0].classList.contains('hide')) {
    showWorkBtn.textContent = 'show more';
  } else {
    showWorkBtn.textContent = 'show less';
  }
});
