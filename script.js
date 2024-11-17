const ball = document.querySelector('.ball');
const button = document.getElementById('toggleAnimation');

let isAnimating = true;

button.addEventListener('click', () => {
  if (isAnimating) {
    ball.style.animation = 'none';
  } else {
    ball.style.animation = 'bounce 1s infinite';
  }
  isAnimating = !isAnimating;
});
