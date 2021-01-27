
var start = document.getElementById("start_audio");
var pause = document.getElementById("pause_audio");
var rewind = document.getElementById("rewind_audio");
var code_input = document.getElementById("code_input");
var feedback = document.getElementById("feedback");
var body = document.querySelector("body");
var audio = document.getElementById("code_audio");
var weiter = document.getElementById("weiter1");
var solved;

code_input.addEventListener("keydown", enter);
start.addEventListener("click", checkingChecked);
pause.addEventListener("click", checkingChecked);
rewind.addEventListener("click", checkingChecked);
weiter.addEventListener("click", next);

function next() {
	if (solved === true) {
		alert("next");
	} else {
		alert("nope");
	}
}

function enter(evt) {
	var taste = evt.key;
	if (taste === "Enter") {
		var code = code_input.value;
		if (code === "1234") {
			feedback.innerHTML = "Nice";
			weiter.animate([
			{
				opacity: "0"
			},
			{
				opacity: "1"
			}],{
				duration: 2000,
				iteration: 1,
				fill: "forwards"
			});
			solved = true;
		} else {
			feedback.innerHTML = "Falsch";
		}
	}
}

function checkingChecked() {
	if(start.checked) {
		audio.play();
	} else if (pause.checked) {
		audio.pause();
	} else if (rewind.checked) {
		audio.load();
	}
}