// Handle Get Started button
function getStarted() {
  alert("Thanks for choosing SimpleSite! 🚀");
}

// Handle subscription form
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  if (email.includes("@")) {
    message.textContent = "✅ Thank you for subscribing!";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Please enter a valid email.";
    message.style.color = "red";
  }

  document.getElementById("email").value = "";
});
