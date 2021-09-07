require("@rails/ujs").start();
require("@rails/activestorage").start();
require("channels");

import "bootstrap";
import { modalBio } from "../components/modal";
import { homeAnimation } from "../components/home_animation";
import { arrowDisappearOnScroll } from "../components/arrow_disappear_on_scroll";

const cardArrow = $(".card-arrow");

if (cardArrow.is(':visible')) {
  if ($(window).innerWidth() >= 1800) {
    cardArrow.hide();
  }
  arrowDisappearOnScroll();
}

else if ($("#popup-prkLink").is(':visible')) {
  modalBio();
}

else if ($(".page-home").is(':visible')) {
  homeAnimation();
}

AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});
