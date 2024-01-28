gsap.registerPlugin(ScrollTrigger);

//Horizontal scroll for ipad and desktop screens
var sections = gsap.utils.toArray(".best-selling-item");
if (window.matchMedia("(min-width: 720px)").matches) {
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".best-selling-container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () =>
        "+=" + document.querySelector(".best-selling-container").offsetWidth,
    },
  });
}

//Custom cursor function to move with cursor, but hidden
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - cursor.offsetWidth + "px";
  cursor.style.top = e.pageY - cursor.offsetHeight + "px";
});

//Display custom cursor only on hover on shop-item-image
document.querySelector("body").addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("shop-item-image")) {
    cursor.classList.add("cursor-active");
  } else {
    cursor.classList.remove("cursor-active");
  }
});

//Hide when custom cursor when you hover out
document.querySelector("body").addEventListener("mouseout", (e) => {
  cursor.classList.remove("cursor-active");
});
