document.querySelector("#hamburger").addEventListener("click", () => {
  if (!document.querySelector("nav").classList.contains("is-active")) {
    document.querySelector("nav").classList.add("is-active");
    document.querySelector(".hamburger-line").style.width = "2.2rem";
  } else {
    document.querySelector("nav").classList.remove("is-active");
    document.querySelector(".hamburger-line").style.width = "1.6rem";
  }
});
