gsap.registerPlugin(ScrollTrigger);

menuItem = document.querySelectorAll(".nav-text");
menuItem[3].addEventListener("click", () => {
  console.log(menuItem[3]);
  gsap.to("nav", {
    y: "-100vh",
    duration: 0.1,
    ease: "ease-in-out",
  });
});

let tl = gsap.timeline();
tl.to(".prepage-inner", {
  delay: 0.5,
  height: "100vh",
  duration: 1,
  ease: "ease-in-out",
});
tl.to(".prepage", {
  y: "-100vh",
  delay: 0.5,
  duration: 1,
  onComplete: function () {
    document.querySelector(".prepage").style.display = "none";
    document.querySelector("body").classList.remove("fixed");
  },
});

let sections = gsap.utils.toArray(".best-selling-item");
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

let cursor = document.querySelector(".cursor");
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
