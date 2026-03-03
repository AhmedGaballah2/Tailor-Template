var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms";
    preloader.style.opacity = 0;

    setTimeout(function () {
      preloader.style.display = "none";
    }, 400);
  }, 500);
};

var headerContainer = document.getElementsByClassName("header__container")[0];

var offers = document.getElementsByClassName("offer");

var scrollTop = document.getElementsByClassName("scroll__up")[0];

scrollTop.style.display = "none";

window.onscroll = function () {
  if (scrollY > 420) {
    headerContainer.classList.add("fixed-bar");
    scrollTop.style.display = "block";
  } else {
    headerContainer.classList.remove("fixed-bar");
    scrollTop.style.display = "none";
  }
};

scrollTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
  });
});

var main = document.getElementsByTagName("main")[0];

var observer = new IntersectionObserver(function (entries) {
  var entry = entries[0];

  if (entry.isIntersecting) {
    offers[0].style.animation = "fadeInUp 1.5s  forwards";
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
  }
});

observer.observe(main);

var service = document.getElementsByClassName("services__types")[0];
var services = document.getElementsByClassName("service");

var observer1 = new IntersectionObserver(function (entries) {
  var entry = entries[0];

  if (entry.isIntersecting) {
    services[0].style.animation = "fadeInUp 1.5s  forwards";
    services[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
    services[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
    services[3].style.animation = "fadeInUp 1.5s 1.2s forwards";
  }
});

observer1.observe(service);

var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");

var leftArrow = document.getElementById("left__arrow");
var rightArrow = document.getElementById("right__arrow");

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");

var intervalId;
var initialTimeOut;

function slideRight() {
  q1.style.transition = "none";
  q2.style.transition = "none";

  q1.style.left = "0";
  q2.style.left = "115%";

  setTimeout(() => {
    q1.style.transition = "all 0.6s ease-in-out";
    q2.style.transition = "all 0.6s ease-in-out";

    q1.style.left = "-115%";
    q2.style.left = "0";
  }, 50);
}

function slideLeft() {
  q1.style.transition = "none";
  q2.style.transition = "none";

  q1.style.left = "-115%";
  q2.style.left = "0";

  setTimeout(() => {
    q1.style.transition = "all 0.6s ease-in-out";
    q2.style.transition = "all 0.6s ease-in-out";

    q1.style.left = "0";
    q2.style.left = "115%";
  }, 50);
}

function startSlider() {
  slideRight();
  intervalId = setInterval(slideRight, 3000);
}

initialTimeOut = setTimeout(startSlider, 3000);

rightArrow.addEventListener("click", function (e) {
  e.preventDefault();
  if (circle1.classList.contains("active")) {
    circle1.classList.remove("active");
    circle2.classList.add("active");
  } else {
    circle2.classList.remove("active");
    circle1.classList.add("active");
  }

  clearInterval(intervalId);
  clearTimeout(initialTimeOut);

  slideRight();

  intervalId = setInterval(slideRight, 3000);
});

leftArrow.addEventListener("click", function (e) {
  e.preventDefault();
  if (circle1.classList.contains("active")) {
    circle1.classList.remove("active");
    circle2.classList.add("active");
  } else {
    circle2.classList.remove("active");
    circle1.classList.add("active");
  }

  clearInterval(intervalId);
  clearTimeout(initialTimeOut);

  slideLeft();

  intervalId = setInterval(slideRight, 3000);
});
