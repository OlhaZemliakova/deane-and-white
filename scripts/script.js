document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email-input");
    const emailError = document.getElementById("email-error");
    const successfulMessage = document.getElementById("successful-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = "block";
      emailInput.classList.add("error");
      return false;
    }

    emailError.style.display = "none";
    emailInput.classList.remove("error");

    const button = document.querySelector(".button--subscribe");
    button.textContent = "Sent...";
    setTimeout(function () {
      emailInput.style.display = "none";
      button.style.display = "none";
      successfulMessage.style.display = "block";
    }, 1000);
  });
