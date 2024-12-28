/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* Defaults */
var kvm = 30,
	bredde = 120,
	avstand = 3, /* TODO: Should be block settings */ 
	cc = 600; /* TODO: Should be block settings */ 


/* Elements / wrappers */
const	kvmWrapper = document.getElementById("kvm"),
		breddeWrapper = document.getElementById("bredde"),
		calculatedLopemeterWrapper = document.getElementById("calculatedLopemeter"),
		calculatedSkruerWrapper = document.getElementById("calculatedSkruer"),
		kvmInput = document.getElementById("kvmInput"),
		breddeInput = document.getElementById("breddeInput");

/* set starting values */
/* TODO: save to cookie and load from there if present */
kvmWrapper.textContent = kvm;
breddeWrapper.textContent = bredde;
window.addEventListener("load", (event) => {
	let breddeInputValue = parseInt(breddeInput.value),
		kvmInputValue = parseInt(kvmInput.value);
		fullBredde = breddeInputValue+avstand;
	calculatedLopemeterWrapper.textContent = calculateLopemeter(fullBredde, kvmInputValue);
	calculatedSkruerWrapper.textContent = calculateSkruer(fullBredde, kvmInputValue);
});

/* Listen to changes */
kvmInput.addEventListener("input", handleChange);
breddeInput.addEventListener("input", handleChange);

/* Calculate values */
function calculateLopemeter(fullBredde, kvmInputValue) {
    let lmprkvm = 1000 / fullBredde,
    	calcLopemeter = Math.round(kvmInputValue * lmprkvm * 1.1); /* TODO: wastage should be changable front end input for user */
    if(Number.isNaN(calcLopemeter)) {
        return 0;
    } else {
        return calcLopemeter;
    }
}

function calculateSkruer(fullBredde, kvmInputValue) {
	let antallSkruerPrSpikerslag = 1000 / fullBredde * 2,
		antallSpikerslag = (1000 / cc ) + 1,
		calcSkruer = Math.round(antallSkruerPrSpikerslag * antallSpikerslag * kvmInputValue / 10) * 10; /* TODO: wastage should be changable front end input for user */
	if(Number.isNaN(calcSkruer)) {
		return 0;
	} else {
		return calcSkruer;
	}
}

/* Handle input change and recalculate */
function handleChange() {
	let breddeInputValue = parseInt(breddeInput.value),
		kvmInputValue = parseInt(kvmInput.value);
		fullBredde = breddeInputValue+avstand;

	kvmWrapper.textContent = kvmInputValue;
	breddeWrapper.textContent = breddeInputValue;

	calculatedLopemeterWrapper.textContent = calculateLopemeter(fullBredde, kvmInputValue);
	calculatedSkruerWrapper.textContent = calculateSkruer(fullBredde, kvmInputValue);
	
}

