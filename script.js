// console.log('JS is working');
const accordionItems = document.querySelectorAll('.accordion');


accordionItems.forEach((accordion) => {
  accordion.setAttribute('tabindex', '0');

  const toggleAccordion = () => {
    const answer = accordion.querySelector('.answer');
    answer.classList.toggle('active');

    const image = accordion.querySelector('.img');
    image.classList.toggle('active');

    if (image.classList.contains('active')) {
      image.src = 'assets/images/icon-minus.svg';
    } else {
      image.src = 'assets/images/icon-plus.svg';
    }
  }
  // mouse Clicks
  accordion.addEventListener('click', toggleAccordion);

  // keyboard
  accordion.addEventListener('keydown', (event) => {
    //  console.log('KEY PRESSED:', e.key);
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      toggleAccordion();
    }
  });
});