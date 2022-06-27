
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 2000);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 2000);
}



let modal = document.querySelector('.modal--window')

function closeModal() {
console.log(modal)
modal.style.display = 'none';
}