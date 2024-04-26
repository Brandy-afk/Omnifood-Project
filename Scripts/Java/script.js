// Event listeners for nav pop up.
// Initial call is for the open and close button
// Loops is for when links are pressed.
const mobileNavButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
mobileNavButton.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const headerLinks = document.querySelectorAll(".main-link");
console.log(headerLinks.length);

headerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
});

// STICKY //
const heroSectionEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];

    if (!ent.isIntersecting && !document.body.classList.contains("sticky"))
      document.body.classList.toggle("sticky");
    else if (ent.isIntersecting && document.body.classList.contains("sticky"))
      document.body.classList.toggle("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSectionEl);

// TIME UPDATE //
updateYear();

function updateYear() {
  let yearEl = document.querySelector(".year");
  let currentyear = new Date().getFullYear();
  yearEl.textContent = currentyear;
}
