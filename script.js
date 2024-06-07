'use strict';

const hiddenWorks = document.querySelectorAll('.hidden');
const showWorkBtn = document.querySelector('.show_btn');
const sectionHero = document.querySelector('.section_hero');
const nav = document.querySelector('.nav');
const sections = document.querySelectorAll('.section');

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

const stickyOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-80px',
};

const stickyOberver = new IntersectionObserver(function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('nav_sticky');
  else nav.classList.remove('nav_sticky');
}, stickyOptions);

stickyOberver.observe(sectionHero);

const revealOptions = {
  root: null,
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver(function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section_hidden');
  revealObserver.unobserve(entry.target);
}, revealOptions);

sections.forEach((section) => {
  revealObserver.observe(section);
  section.classList.add('section_hidden');
});
