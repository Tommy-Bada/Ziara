const ziaraText = new SplitType("#ziara-text");
const ziaraTextTwo = new SplitType("#ziara-text-2");
const ziaraTextThree = new SplitType("#ziara-text-3");
const ziaraTextFour = new SplitType("#ziara-text-4");
gsap.to(".char", {
  opacity: 1,
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".shop-item", {
  scrollTrigger: {
    trigger: ".first-trigger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    markers: false,
  },
  x: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.1,
});

gsap.to(".shop-item-2", {
  scrollTrigger: {
    trigger: ".second-trigger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    markers: false,
  },
  x: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
});

gsap.to(".shop-item-3", {
  scrollTrigger: {
    trigger: ".second-trigger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    markers: false,
  },
  x: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
});

gsap.to(".shop-item-4", {
  scrollTrigger: {
    trigger: ".third-trigger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    markers: false,
  },
  x: 0,
  opacity: 1,
  duration: 1,
});

gsap.to(".flow-item", {
  duration: 10,
  ease: "linear",
  x: "-=1640", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % 1640), //force x value to be between 0 and 500 using modulus
  },
  repeat: -1,
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

document.querySelector("#hamburger").addEventListener("click", () => {
  if (!document.querySelector("nav").classList.contains("is-active")) {
    document.querySelector("nav").classList.add("is-active");
    document.querySelector(".hamburger-line").style.width = "2.2rem";
    // window.onscroll = function () {};
  } else {
    document.querySelector("nav").classList.remove("is-active");
    document.querySelector(".hamburger-line").style.width = "1.6rem";
    // document.querySelector("body").style.position = "fixed";
    // scrollTop = window.scrollY || document.documentElement.scrollTop;
    // (scrollLeft = window.scrollX || document.documentElement.scrollLeft),
    //   (window.onscroll = function () {
    //     window.scrollTo(scrollLeft, scrollTop);
    //   });
  }
});
