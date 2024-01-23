function reinitializeScripts() {
  // Extract the current page URL
  const currentPage = window.location.pathname;
  // Create a mapping between pages and their corresponding script files
  const scriptMappings = {
    "/": ["nav.js", "index.js"],
    "/bestselling.html": ["nav.js", "bestselling.js"],
    // Add other pages and script files as needed
  };
  document.querySelector("body").style.position = "static";

  // Check if the current page has a corresponding script file
  if (currentPage in scriptMappings) {
    const scriptFiles = scriptMappings[currentPage];

    removeExistingScripts(scriptFiles);

    // Import each script dynamically
    scriptFiles.forEach((scriptFile) => {
      const script = document.createElement("script");
      script.src = scriptFile;
      script.defer = true;

      // Append the script to the document
      document.body.appendChild(script);
    });
  }
}

// Function to remove existing scripts with similar names
function removeExistingScripts(newScriptFiles) {
  const scriptElements = document.querySelectorAll("script");

  scriptElements.forEach((script) => {
    const scriptSrc = script.getAttribute("src");
    if (scriptSrc && newScriptFiles.includes(scriptSrc)) {
      script.parentNode.removeChild(script);
    }
  });
}

gsap.set(".loader", {
  scaleY: 0,
  transformOrigin: "top top",
  ease: "ease-in-out",
  autoAlpha: 1,
});

function loaderIn() {
  document.querySelector("body").style.position = "fixed";
  // GSAP tween to stretch the loading screen across the whole screen
  const tl = gsap.timeline();
  return tl
    .fromTo(
      ".loader",
      {
        scaleY: 0,
      },
      {
        duration: 1.5,
        scaleY: 1,
        rotation: 0,
        ease: "power4.inOut",
        transformOrigin: "top top",
      }
    )
    .fromTo(
      ".loader-text",
      {
        opacity: 0,
        y: -80,
      },
      { opacity: 1, duration: 0.5, y: 0, ease: "power2.out" }
    );
}
function loaderAway(onCompleteCallback) {
  const tl = gsap.timeline({
    onComplete: onCompleteCallback,
  });

  // GSAP tween to hide loading screen
  return tl.to(".loader", {
    duration: 1.5,
    scaleY: 0,

    transformOrigin: "bottom bottom",
    ease: "power4.inOut",
  });
}

function afterEnter() {
  return gsap.to("body", {
    delay: 4,
  });
}

function closeNav() {
  return gsap.to("nav", {
    width: 0,
    duration: 2,
    ease: "ease-in-out",
  });
}

document.querySelector("ul").addEventListener("click", function (event) {
  if (
    event.target.parentElement.getAttribute("href") !== window.location.pathname
  ) {
    barba.init({
      transitions: [
        {
          async leave() {
            await loaderIn();
          },
          beforeEnter() {
            loaderAway(() => {
              reinitializeScripts();
            });
          },
        },
      ],
    });
  }
});
