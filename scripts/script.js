document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("subscribe-form")
    .addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email-input");
  const emailError = document.getElementById("email-error");
  const successfulMessage = document.getElementById("successful-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    displayError(emailError, emailInput);
    return false;
  }

  hideError(emailError, emailInput);

  const button = document.querySelector(".button--subscribe");
  button.textContent = "Sending...";

  setTimeout(function () {
    emailInput.style.display = "none";
    button.style.display = "none";
    successfulMessage.style.display = "block";
  }, 1000);
}

function displayError(errorElement, inputElement) {
  errorElement.style.display = "block";
  inputElement.classList.add("error");
}

function hideError(errorElement, inputElement) {
  errorElement.style.display = "none";
  inputElement.classList.remove("error");
}
