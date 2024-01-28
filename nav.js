// Hamburger click function for navbar opening and closing
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

// Image on text hover animation
var menuItem = document.querySelectorAll(".nav-text");
var menuImage = document.querySelectorAll(".nav-image");
for (let i = 0; i < 3; i++) {
  const animation = gsap.to(menuImage[i], {
    opacity: 1,
    duration: 0.2,
    scale: 1,
    ease: "ease-in-out",
  });
  menuItem[i].addEventListener("mouseenter", () => animation.play());
  menuItem[i].addEventListener("mouseleave", () => animation.reverse());
  animation.reverse();
}

//Function to move Image along with cursor
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

//Click function to prevent default reload when current page is clicked in the nav.
document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.parentElement.classList.contains("nav-menu")) {
    if (
      event.target.parentElement.getAttribute("href") ===
      window.location.pathname
    ) {
      event.preventDefault();
      document.querySelector("nav").classList.remove("is-active");
      document.querySelector(".hamburger-line").style.width = "1.6rem";
      document.querySelector("body").style.position = "static";
    }
  }
});
