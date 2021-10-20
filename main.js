//Sliderbase

var slideNo = 1;
Carousel(slideNo);

function Carousel(n) {
  var slides = document.getElementsByClassName("image-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideNo - 1].className += " active";

}

function newSlide(n) {
  Carousel(slideNo += n);
}

function currentSlide(n) {
  Carousel(slideNo = n);
}


//slider1

var slideNo1 = 1;
Carousel1(slideNo1);

function Carousel1(n) {
  var slides1 = document.getElementsByClassName("image-container1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {
    slideNo1 = 1;
  }
  if (n < 1) {
    slideNo1 = slides1.length;
  }
  for (var i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideNo1 - 1].style.display = "block";
  for (var i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  dots1[slideNo1 - 1].className += " active";

}

function newSlide1(n) {
  Carousel1(slideNo1 += n);
}

function currentSlide1(n) {
  Carousel1(slideNo1 = n);
}

//slider2 

var slideNo2 = 1;
Carousel2(slideNo2);

function Carousel2(n) {
  var slides2 = document.getElementsByClassName("image-container2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {
    slideNo2 = 1;
  }
  if (n < 1) {
    slideNo2 = slides2.length;
  }
  for (var i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideNo2 - 1].style.display = "block";
  for (var i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  dots2[slideNo2 - 1].className += " active";

}

function newSlide2(n) {
  Carousel2(slideNo2 += n);
}

function currentSlide1(n) {
  Carousel1(slideNo1 = n);
}
