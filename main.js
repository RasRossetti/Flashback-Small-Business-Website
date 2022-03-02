var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

//Nav Menu

const hamburger = document.querySelector(".hamburger");
const backdrop = document.querySelector(".backdrop2");
const sidebar = document.querySelector(".sidebar2");
const times = document.querySelector(".times");

hamburger.addEventListener("click", () => {
  toggleSlidebar();
});
backdrop.addEventListener("click", () => {
  toggleSlidebar();
});
times.addEventListener("click", () => {
  toggleSlidebar();
});

const toggleSlidebar = () => {
  backdrop.classList.toggle("backdrop2--active");
  sidebar.classList.toggle("sidebar2--active");
}

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


//slider4 

var slideNo4 = 1;
Carousel4(slideNo4);

function Carousel4(n) {
  var slides4 = document.getElementsByClassName("image-container4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {
    slideNo4 = 1;
  }
  if (n < 1) {
    slideNo4 = slides4.length;
  }
  for (var i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideNo4 - 1].style.display = "block";
  for (var i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  dots4[slideNo4 - 1].className += " active";
}
function newSlide4(n) {
  Carousel4(slideNo4 += n);
}

