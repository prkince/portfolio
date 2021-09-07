export const modalBio = () => {
  // get the popup
  const popupPrk = document.getElementById("popup-prkBox");

  // get the link that opens the popup
  const popupPrkLink = document.getElementById("popup-prkLink");

  // get the close action element
  const closePopup = document.getElementById("closePopup");

  // open the popup once the link is clicked
  popupPrkLink.onclick = () => (popupPrk.style.display = "block");

  // close the popup once close element is clicked
  closePopup.onclick = () => (popupPrk.style.display = "none");

  // close the popup when user clicks outside of the box
  window.onclick = (event) => {
    if (event.target == popupPrk) {
      popupPrk.style.display = "none";
    }
  };
};
