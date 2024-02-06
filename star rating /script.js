const stars = document.querySelectorAll(".fa-star-o");
const selectedRatingValueText = document.querySelector(
  ".selected-rating-value"
);

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleOnClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpdatesRatingState(currentRatingValue);
}
function handleUpdatesRatingState(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.remove(".fa-star-o");
      stars[i].classList.add("fa-star");
    } else {
      stars[i].classList.add(".fa-star-o");
      stars[i].classList.remove("fa-star");
    }
  }
}

function handleOnClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdatesRatingState(currentTotalSelectedStars);
  selectedRatingValueText.textContent = currentTotalSelectedStars;

  //  adding sweet alert =========
  Swal.fire({
    position: "top",
    title: "Thank you for your feedback!",

    icon: "success",

    background: "whitesmoke",

    // Auto close after 3 seconds
    timer: 3000,
    showConfirmButton: false,
  });
}

function handleMouseLeave(event) {
  handleUpdatesRatingState(currentTotalSelectedStars);
  //   alert("Thank you for your feedback !");
}


// http://127.0.0.1:3000/star%20rating%20/index.html