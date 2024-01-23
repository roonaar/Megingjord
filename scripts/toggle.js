// Get the button element
const button =document.querySelector('.hamburger');

// Get the menu element
const menu = document.querySelector('.menu');

// Add event listener to the button
button.addEventListener('click', () => {
    // Toggle the menu's visibility
    menu.classList.toggle('open');
});

const dialog = document.querySelector("dialog");
const dialog_inner = document.querySelector("dialog div");
const showButton = document.querySelector(".order");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

//Don't close the dialog if user clicks inside the dialog
dialog_inner.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Close the dialog if user clicks outside the dialog
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

// Close the dialog if user presses Escape key
dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    dialog.close();
  }
});

