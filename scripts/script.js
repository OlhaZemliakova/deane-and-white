document.addEventListener("DOMContentLoaded", function() {

  function handleFormSubmit(event) {
    event.preventDefault();
  
    const emailInput = document.getElementById("email-input");
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
      displayError("Please enter a valid email address", emailInput);
      return false;
    }
  
    hideError(emailInput);
    sendForm(emailInput);
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function displayError(errorMessage, inputElement) {
    const errorElement = document.getElementById("email-error");
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
    inputElement.classList.add("error");
  }
  
  function hideError(inputElement) {
    const errorElement = document.getElementById("email-error");
    errorElement.style.display = "none";
    inputElement.classList.remove("error");
  }

  function sendForm(emailInput) {
    showSendingMessage();
    setTimeout(function () {
      hideForm(emailInput);
      showSuccessMessage();
    }, 1000);
  }

  function showSendingMessage() {
    const button = document.querySelector(".button--subscribe");
    button.textContent = "Sending...";
  }

  function hideForm(emailInput) {
    const button = document.querySelector(".button--subscribe");
    emailInput.style.display = "none";
    button.style.display = "none";
  }

  function showSuccessMessage() {
    const successfulMessage = document.getElementById("successful-message");
    successfulMessage.style.display = "block";
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);

});
