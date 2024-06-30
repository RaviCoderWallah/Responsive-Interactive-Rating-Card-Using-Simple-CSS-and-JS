const submitButton = document.querySelector("#submit-btn");
const numbers = document.querySelector(".numbers");

numbers.addEventListener("click", (e) => {
  if (e.target !== numbers) {
    [...numbers.children].forEach(element => {
      element.classList.remove("active");
      e.target.classList.add("active");
    });

    let clickNumber = e.target.innerText;
    thankYou(clickNumber);
  }
});

const starRatingContainer = document.querySelector(".star-rating-container");

function thankYou(ratingNumber) {
  
  submitButton.addEventListener("click", () => {
    const thankYouText = `
    <div class="thank-you-container">
          <div class="thank-you-image">
            <img src="illustration-thank-you.svg" alt="Thank You Image">
          </div>
          <div class="rating-output">
            <p>You selected ${ratingNumber} out of 5</p>
          </div>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need support, don't hesitaet to get in touch!
          </p>
    </div>

`
    starRatingContainer.innerHTML = thankYouText;
  });

}


