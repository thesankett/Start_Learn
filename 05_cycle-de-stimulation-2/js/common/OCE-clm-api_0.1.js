/* MiTouch CLM API
author: samay pattanaik
vakils premedia pvt ltd

version: 0.1
MiVersion: ~5.0
*/

let noMiEnv = "OCE environment not found - "

/*Navigate to sequence*/

function navigateToSequence(seqName, slideName, animation) {
	try {
		CLMPlayer.gotoSlide(seqName, slideName, animation);
	}
	catch (err) {
		console.log(noMiEnv + "navigation to " + id + " sequence");
	}
}

/*go to next sequence*/

function goNextSequence() {
	try {
		CLMPlayer.goNextSequence();
	}
	catch (err) {
		console.log(noMiEnv + "navigation to next sequence");
	}
}

/*go to previous sequence*/
function goPreviousSequence() {
	try {
		CLMPlayer.goPreviousSequence();
	}
	catch (err) {
		console.log(noMiEnv + "navigation to previous sequence");
	}
}

function onView(element, viewstate, callbak, param1, param2, param3) {
	if (!element) { element = document.getElementsByTagName('body') };
	if (!callbak) { console.log("no action is defined"); return; }
	try {
		CLMPlayer.registerEventListener(viewstate, function () {
			callbak();
		});
	}
	catch (err) {
		console.log(noMiEnv + " " + viewstate + " on page");
	}
}

/* on viewappearing*/
function onviewappearing(element, callbak, param1, param2, param3) {
	onView(element, 'viewappearing', callbak, param1, param2, param3);
}
/* on viewappearing*/
function onviewdisappearing(element, callbak, param1, param2, param3) {
	onView(element, 'viewdisappearing', callbak, param1, param2, param3);
}
/* on viewappearing*/
function onviewappeared(element, callbak, param1, param2, param3) {
	onView(element, 'viewappeared', callbak, param1, param2, param3);
}
/* on viewappearing*/
function onviewdisappeared(element, callbak, param1, param2, param3) {
	onView(element, 'viewdisappeared', callbak, param1, param2, param3);
}