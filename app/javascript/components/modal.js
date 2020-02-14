
if (location.href == "http://localhost:3000/bio" || location.href == "https://portfolio-prk.herokuapp.com/bio" || location.href == "https://www.delage.dev/bio" ) {

	// get the popup
	var popupPrk = document.getElementById('popup-prkBox');

	// get the link that opens the popup
	var popupPrkLink = document.getElementById("popup-prkLink");

	// get the close action element
	var close = document.getElementsByClassName("close")[0];

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