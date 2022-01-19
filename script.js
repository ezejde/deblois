window.onload = () => {
  // ml titles javascript
  var ml16textWrapper = document.querySelector(".ml16");
  ml16textWrapper.innerHTML = ml16textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml16 .letter",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".ml16",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });

  // gif fixer js
  // var c = $("#flower-canvas")[0];
  // var w = c.width;
  // var h = c.height;
  // var img = $("#flower")[0];
  // setTimeout(function () {
  //   c.getContext("2d").drawImage(img, 0, 0, w, h);
  //   $(img).hide();
  //   $(c).show();
  // }, 2000);
};
