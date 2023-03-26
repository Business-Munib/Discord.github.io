const label = document.querySelector("#label")
const add = document.querySelector("#add")
const take = document.querySelector("#take")
let count;

label.innerHTML = getCookie("value")


console.log(getCookie("value"))

add.addEventListener("click", increment)
take.addEventListener("click", decrement)

function increment() {
	count = getCookie("value") + 1;
	document.cookie = `value=${count}; expires=Sun, 1, January, 2060 12:00:00 UTC; path=/`
	label.textContent = getCookie("value")
}

function decrement() {
	count = getCookie("value") - 1;
	document.cookie = `value=${count}; expires=Sun, 1, January, 2060 12:00:00 UTC; path=/`
	label.textContent = getCookie("value")
}


function getCookie(name) {
	const cDecode = decodeURIComponent(document.cookie);
	const cArray = cDecode.split("; ")
	let result = null;

	cArray.forEach(element => {
		if(element.indexOf(name) == 0){
			result = Number(element.substring(name.length + 1))
		}
	})
	return result;
}