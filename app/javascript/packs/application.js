require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import "../components/modal";
import "../components/home_animation";

AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
 });

