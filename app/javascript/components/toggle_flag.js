const toggleFlag = () => {
	changeColor();
	let nIntervId;

	function changeColor() {
	  nIntervId = setInterval(flashText, 2000);
	}

	function flashText() {
	  let oElem = document.getElementById('flag-color-toggle');
	  oElem.style.color = oElem.style.color == 'lightcoral' ? 'lightskyblue' : 'lightcoral';
	}
}

export { toggleFlag } 