gsap.registerPlugin(ScrollTrigger);
gsap.from(".shop-item", {
  scrollTrigger: {
    trigger: ".first-trigger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    markers: false,
  },
  opacity: 0,
  y: 150,
  stagger: 0.1,
  ease: "power1.inOut",
  duration: 3,
});

gsap.from(".shop-item-2", {
  scrollTrigger: {
    trigger: ".second-trigger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    markers: false,
  },
  y: 150,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  ease: "power1.inOut",
});

gsap.from(".shop-item-3", {
  scrollTrigger: {
    trigger: ".second-trigger",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    markers: false,
  },
  y: 150,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  ease: "power1.inOut",
});

gsap.from(".shop-item-4", {
  scrollTrigger: {
    trigger: ".third-trigger",
    start: "top bottom",
    end: "center center",
    markers: false,
  },
  x: 100,
  opacity: 0,
  duration: 2,
  ease: "power1.inOut",
});

// gsap.to(".flow-item", {
//   duration: 10,
//   ease: "linear",
//   x: "-=1640", //move each box 500px to right
//   modifiers: {
//     x: gsap.utils.unitize((x) => parseFloat(x) % 1640), //force x value to be between 0 and 500 using modulus
//   },
//   repeat: -1,
// });

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

var container = document.querySelector(".last-scroll-container");
var currentPosition = 0;

document
  .querySelector(".right-arrow-btn")
  .addEventListener("click", function () {
    currentPosition -= 410;
    if (currentPosition < -2460) {
      currentPosition = 0;
      gsap.to(".shop-item-4", {
        x: 0,
        duration: 1,
      });
    } else {
      gsap.to(".shop-item-4", {
        x: currentPosition,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  });

document
  .querySelector(".left-arrow-btn")
  .addEventListener("click", function () {
    // currentPosition += 410;
    gsap.to(".shop-item-4", {
      x: 0,
      duration: 2,
      ease: "power2.in",
      onComplete: () => {
        currentPosition = 0;
      },
    });
  });
