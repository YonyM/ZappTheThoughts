

const burgerMenu = document.querySelector('.burgermenu');
const menu = document.querySelector('.menu');

const poppups = document.querySelectorAll('.poppup');
const contentLines = document.querySelectorAll('.content-line');

poppups.forEach((poppup, i) => {
  const content = poppup.querySelector('.content');
  const contentLine = contentLines[i];

  content.addEventListener('mouseenter', () => {
    contentLine.style.width = '200px';
  });

  content.addEventListener('mouseleave', () => {
    contentLine.style.width = '30px';
  });
});

burgerMenu.addEventListener('click', function() {
  if (!menu.classList.contains('open')) {
    menu.classList.add('open');
  } else {
    menu.classList.remove('open');
  }
});


