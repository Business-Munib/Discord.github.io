const start = document.getElementById("start");
const div = document.querySelector(".myDiv");

start.addEventListener("click", anim);

function anim() {
	let timerId = null;
	let x = 0;
	let y = 0;
	let angle = 0;
	let num = 99999;

	timerId = setInterval(frame, 5)
	function frame() {
		if(angle >= num || x >= 500 || y >= 250){

			clearInterval(timerId)
		}else{
			x+=2;
			y++;
			angle++;
			div.style.transform = "rotate("+angle+"deg)";
			div.style.left = x + "px"
			div.style.top = y + "px"
		}
	}
}