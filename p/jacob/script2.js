window.onload = function () {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".intro-title .line",
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700,
    })
    .add({
      targets: ".intro-title .line",
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
    })
    .add({
      targets: ".intro-title .ampersand",
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    })
    .add({
      targets: ".intro-title .letters-left",
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=300",
    })
    .add({
      targets: ".intro-title .letters-right",
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    });
};

document.addEventListener("scroll", function (e) {
  if (pageYOffset >= 900) {
    document.getElementById("three").className = "sn-item active";
    document.getElementById("two").className = "sn-item default";
    document.getElementById("one").className = "sn-item default";
  } else if (pageYOffset >= 400) {
    document.getElementById("two").className = "sn-item active";
    document.getElementById("three").className = "sn-item default";
    document.getElementById("one").className = "sn-item default";
  } else if (pageYOffset >= 10) {
    document.getElementById("one").className = "sn-item active";
    document.getElementById("two").className = "sn-item default";
    document.getElementById("three").className = "sn-item default";
  }
});
