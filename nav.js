document.querySelector("#hamburger").addEventListener("click", () => {
  if (!document.querySelector("nav").classList.contains("is-active")) {
    document.querySelector("nav").classList.add("is-active");
    document.querySelector(".hamburger-line").style.width = "2.2rem";
    document.querySelector("body").style.position = "fixed";
  } else {
    document.querySelector("nav").classList.remove("is-active");
    document.querySelector(".hamburger-line").style.width = "1.6rem";
    document.querySelector("body").style.position = "static";
  }
});

let menuItem = document.querySelectorAll(".nav-text");
let menuImage = document.querySelectorAll(".nav-image");

for (let i = 0; i < 5; i++) {
  const animation = gsap.to(menuImage[i], {
    opacity: 1,
    duration: 0.2,
    scale: 1,
    ease: "ease-in-out",
  });
  animation.reverse();
  menuItem[i].addEventListener("mouseenter", () => animation.play());
  menuItem[i].addEventListener("mouseleave", () => animation.reverse());
}

function moveText(e) {
  gsap.to([...menuImage], {
    css: {
      left: e.pageX + 50,
      top: e.pageY,
    },
    duration: 0.3,
  });
}

menuItem.forEach((el) => {
  el.addEventListener("mousemove", moveText);
});
