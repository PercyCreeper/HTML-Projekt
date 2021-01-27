
var titel = document.getElementById("titel");
var startbutton = document.getElementById("startbutton");
var click = document.getElementById("click");

function animation() {
	titel.animate([
		{
			transform: "translate(0px, 0px)"
		},
		{
			transform: "translate(0px, 20px)"
		}, 
		{
			transform: "translate(0px, 0px)"
		}
		], {
		duration: 10000,
		iterations: Infinity
	});
}
function playmus(){
	document.getElementById("intromus").volume = 0.4;
	document.getElementById("intromus").play();
}

function start() {
	click.play();
	startbutton.animate([
	{
		opacity: "1"
	},
	{
		opacity: "0"
	}], {
		duration: 1000,
		iteration: 1,
		fill: "forwards"
	});
	titel.animate([
	{
		opacity: "1"
	},
	{
		opacity: "0"
	}], {
		duration: 1000,
		iteration: 1,
		fill: "forwards"
	});
	
	setTimeout(() => {  window.location.href='./pages/intro.html'; }, 1100);
}

startbutton.addEventListener("click", start, true);
titel.addEventListener("click", playmus, true);

animation();