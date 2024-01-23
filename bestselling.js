gsap.registerPlugin(ScrollTrigger);

var sections = gsap.utils.toArray(".best-selling-item");
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

var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - cursor.offsetWidth + "px"; // Adjust the offset
  cursor.style.top = e.pageY - cursor.offsetHeight + "px";
});

document.querySelector("body").addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("shop-item-image")) {
    cursor.classList.add("cursor-active");
  } else {
    cursor.classList.remove("cursor-active");
  }
});
document.querySelector("body").addEventListener("mouseout", (e) => {
  cursor.classList.remove("cursor-active");
});
