const slides = document.querySelectorAll('.slide');
const auto = true;
const tempSlide = 5000

const nextSlide = () => {
  console.log('chamou')
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

setInterval(nextSlide, tempSlide);