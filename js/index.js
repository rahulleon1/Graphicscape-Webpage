AOS.init({
  offset: 500,
  duration: 3000
});

// Random About Img

const imgLinks = ["https://media.giphy.com/media/d2YYjM00df2El1K0/giphy.gif","https://media.giphy.com/media/26xBAcAeAQ2PmzQnS/giphy.gif","https://media.giphy.com/media/5WIFVN2WVSc4rIbRpG/giphy.gif"];

const randomNo = Math.floor(Math.random()*imgLinks.length);

const newImgLink = imgLinks[randomNo];

$(".about-img").attr("src", newImgLink);

// Menu Overlay

$(".links").click(function () {
  $(".menu-ham i").toggleClass("fa-times");
  $(".menu-ham i").toggleClass("fa-bars");
  $(".navbarx").toggleClass("show");
  $(".contact").toggleClass("show");
  callAudio();
});

$(".brand").click(function () {
  callAudio();
});

$(".btn-contact").click(function() {
  callAudio();
});

$(".ham-btn").click(function () {
  $(".navbarx").toggleClass("show");
  $(".contact").toggleClass("show");


  if ($(".navbarx").hasClass("show")) {

    setTimeout(function () {
      $(".menu-ham i").removeClass("fa-bars");
      $(".menu-ham i").addClass("fa-times");
    }, 700);

  } else {
    setTimeout(function () {
      $(".menu-ham i").toggleClass("fa-times");
      $(".menu-ham i").toggleClass("fa-bars");
    }, 300);
  }
});

// Audio Elements

const intro = document.getElementById("intro");
intro.playbackRate = 0.9;
intro.volume = 0.3;

function callAudio() {
  console.log("Function called");
  var audio = new Audio("music/track.wav");
  audio.play();
  audio.playbackRate = 12;
  audio.volume = 0.1;
}