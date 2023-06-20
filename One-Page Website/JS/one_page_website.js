
function openModal() { // Displays the modal on the screen
  document.getElementById("myModal").style.display = "block";
}

function closeModal() { // Closes the modal on the screen
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1; // Keeps track of the current slide index
showSlides(slideIndex);

function plusSlides(n) { // Goes to the next slide
  showSlides(slideIndex += n);
}

function currentSlide(n) { // Shows the slide that is clicked on
  showSlides(slideIndex = n);
}

function showSlides(n) { // Displays slides and captions
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("test");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// function validateForm() {
  //let x = document.forms["RSVP"]["fName"].value;
 // if (x == "") {
   // alert("First name must be filled out");
   // return false;
  //}
  //}
