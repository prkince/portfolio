require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

// Wrap every letter in a span

if (location.href == "http://localhost:3000/" || location.href == "portfolio-prk.herokuapp.com") {
    //Code here
  const textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
}