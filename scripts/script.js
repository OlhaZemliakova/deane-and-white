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

// Add Schema.org markup for Organization

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Deane and White Cookware",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    postalCode: "10172",
    streetAddress: "277 Park Ave, Floor 10",
  },
  email: "info@deaneandwhite.com",
  telephone: "1-800-555-1234",
};

// Add Schema.org markup for Review schema
const reviewSchema = {
  "@type": "Review",
  author: "Michael Barnes",
  reviewBody:
    "I have to say that I'm really impressed. It heats up slowly, but it holds the heat evenly and cooks things perfectly. I've tried all sorts of recipes in it, from scrambled eggs to stir-frys, and everything has come out great.",
  name: "farmfoodlife.com",
  "@type": "Review",
  author: "Isabella Gonzalesa",
  reviewBody:
    "The Deane and White sauté pan is one of my favorite cookware pieces. It heats quickly and evenly, and I love the non-stick surface. It's great for making sauces, sautéing vegetables, and much more.",
  name: "TheKitchenFiesta",
  "@type": "Review",
  author: "Roger Reyes",
  reviewBody:
    "I've never enjoyed cooking as much as I do with my D&W pots and pans. Whether I'm making a quick weeknight dinner or an elaborate holiday feast, I reach for my D&W cookware to help me feel like a pro in the kitchen.",
  name: "Customer",
};

const orgScript = document.createElement("script");
orgScript.type = "application/ld+json";

orgScript.textContent = JSON.stringify(organizationSchema);

document.head.appendChild(orgScript);

const reviewScript = document.createElement("script");
reviewScript.type = "application/ld+json";

reviewScript.textContent = JSON.stringify(reviewSchema);

document.head.appendChild(reviewScript);
