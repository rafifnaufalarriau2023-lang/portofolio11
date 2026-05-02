// NAVBAR
window.addEventListener("scroll", () => {
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// HERO SLIDER
const hero = document.querySelector(".hero");

const images = [
  "pexels-abid-ali-150086727-10647324.jpg",
  "pexels-gottapics-13777760.jpg",
  "pexels-ahmetcotur-19075389.jpg",
  "pexels-semih-basaran-353570345-29679172.jpg"
];

let i = 0;

function slide() {
  hero.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}

setInterval(slide, 4000);
slide();

// FADE
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// WA
function chatWA() {
  window.open("https://wa.me/62895320580160", "_blank");
}