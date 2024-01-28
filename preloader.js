var ziaraText = new SplitType("#ziara-text");
var ziaraTextTwo = new SplitType("#ziara-text-2");
var tl = gsap.timeline();

//Page preloader animation
tl.to(".preloader-inner", {
  width: "100vw",
  duration: 5,
  ease: "ease-in-out",
})
  .to(".preloader-inner", {
    height: "100vh",
    duration: 1,
    ease: "ease-in-out",
  })
  .to(".char", {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.5,
  })
  .to(".char", {
    opacity: 0,
    y: "20rem",
    delay: 1,
    duration: 0.5,
  })
  .to(".preloader", {
    y: "-100vh",
    delay: 0.5,
    duration: 1,
  })
  .fromTo(
    "header",
    {
      y: -100,
      ease: "power1.out",
      opacity: 0.5,
    },
    {
      y: 0,
      ease: "power1.out",
      opacity: 1,
      duration: 1,
      onComplete: function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector("body").classList.remove("scroll-disabled");
      },
    }
  );
