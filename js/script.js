
/* ------ RATE ------*/

const ratingButtons = document.querySelectorAll('.button-rating');
let currentRating = 0;

for (let button of ratingButtons) {
  button.addEventListener('click', function() {

    const currentlySelected = document.querySelector('.selected');
    if (currentlySelected) {
      currentlySelected.classList.remove('selected')
    }

    currentRating = button.getAttribute('data-value');
    button.classList.add('selected');
    console.log(currentRating);
  });
}

/* ------ SUBMIT ------*/

const submitButton = document.querySelector('.button-submit');
const card = document.querySelector('.card');
const cardFront = document.querySelector('.card__front');
const cardBack = document.querySelector('.card__back');
const cardScore = document.querySelector('.card__score');

submitButton.addEventListener('click', function() {

  if (currentRating != 0) {
    card.classList.toggle('flip');
    cardScore.innerHTML = `You selected ${currentRating} out of 5`;

    setTimeout(() => {
      cardFront.classList.toggle('visible');
      cardBack.classList.toggle('visible');
    }, 250) // half of the animation's duration
  
    setTimeout(() => {
      card.classList.remove('flip');
    }, 500) // full time of animation's duration
  }
});
