
var weiter = document.getElementById("weiter");
var text1 = document.getElementById("storytext");
var s;
text1.innerHTML = "Test <br> ROFL ";


function storyStart() {
	
	text1.animate([
	{
		opacity: "0"
	},
	{
		opacity: "1"
	}], {
		duration: 2500,
		iteration: 1,
		fill: "forwards"
	});
}	

function storyWeiter() {

	text1.animate([
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
		setTimeout(() => {  window.location.href='../pages/puzzle1.html'; }, 1100);
	
	
	
}

weiter.addEventListener("click", storyWeiter, true);

storyStart();



	 
	 

