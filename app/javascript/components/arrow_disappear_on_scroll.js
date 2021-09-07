export const arrowDisappearOnScroll = () => {
  window.addEventListener("scroll", () => {
    if ($(window).scrollTop()) {
      $(".card-arrow").hide();
    }
  });
};
