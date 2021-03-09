
const modalBio = () => {

	// get the popup
	const popupPrk = document.getElementById('popup-prkBox');

	// get the link that opens the popup
	const popupPrkLink = document.getElementById("popup-prkLink");

	// get the close action element
	const close = document.getElementsByClassName("close")[0];

	// open the popup once the link is clicked
	popupPrkLink.onclick = function() {
	    popupPrk.style.display = "block";
	}

	// close the popup once close element is clicked
	close.onclick = function() {
	    popupPrk.style.display = "none";
	}

	// close the popup when user clicks outside of the box
	window.onclick = function(event) {
	    if (event.target == popupPrk) {
	        popupPrk.style.display = "none";
	    }
	}

}

export { modalBio }