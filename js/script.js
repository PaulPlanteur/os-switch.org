const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
const darkModeSwitch = document.getElementById('dark-mode-switch');
const header = document.querySelector('header');

darkModeSwitch.addEventListener('click', function() {
  header.classList.toggle('header-dark');
  document.documentElement.classList.toggle('dark-mode');
});
