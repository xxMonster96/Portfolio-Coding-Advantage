var slideIndex = 1;
var buttonIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusButtons(n) {
  showButtons(buttonIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentButton(n) {
  showButtons(buttonIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project fade");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showButtons(n) {
  var i;
  var buttons = document.getElementsByClassName("button_fade");
  if (n > buttons.length) {
    buttonIndex = 1
  }
  if (n < 1) {
    buttonIndex = buttons.length
  }
  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.display= "none";
  }
  buttons[buttonIndex-1].style.display = "block";
}