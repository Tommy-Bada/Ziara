const ziaraText = new SplitType("#ziara-text");
gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
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
