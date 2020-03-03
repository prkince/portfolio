require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { modalBio } from "../components/modal";
import { homeAnimation } from "../components/home_animation";

if(document.getElementById("popup-prkLink")){
 	modalBio()
}

if(document.querySelector(".page-home")){
 	homeAnimation()
}

AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
 });
