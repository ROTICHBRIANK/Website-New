function showAlert(message) {
  alert(message);
}
const homeBtn = document.getElementById("clickmebtn");
if (homeBtn) {
  homeBtn.addEventListener("click", function() {
    showAlert("Hello!, You clicked the home linked")
  });
}
const aboutBtn = document.getElementById("aboutBtn");
if (aboutBtn) {
  aboutBtn.addEventListener("click", function() {
    showAlert("Hello! This is the about page.")
  });
}
const careersBtn = document.getElementById("careersBtn");
if (careersBtn) {
  careersBtn.addEventListener("click", function() {
    showAlert("Hello, career page this is.")
  });
}

document.getElementById("clickmebtn").addEventListener("click", function() {
  alert("You've checked in!");
});

// Harmburger menu togglw
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navlinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}