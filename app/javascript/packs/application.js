require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { modalBio } from "../components/modal";
import { homeAnimation } from "../components/home_animation";
import { arrowDisappearOnScroll } from "../components/arrow_disappear_on_scroll";
import { toggleFlag } from "../components/toggle_flag"

if(document.querySelector(".card-arrow")) {
 	arrowDisappearOnScroll()
}

if(document.getElementById("popup-prkLink")) {
 	modalBio()
}

if(document.querySelector(".page-home")) {
 	homeAnimation()
}

AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

if(document.getElementById("flag-color-toggle")) {
	toggleFlag();
}