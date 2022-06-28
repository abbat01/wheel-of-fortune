const button = document.querySelector('#spin');
button.addEventListener('click', function() {
	spin1()
	button.disabled = true
})

let container = document.querySelector(".container");
let btn = document.getElementById("spin");



let modal = document.querySelector('.modal--window')

function closeModal() {
modal.style.display = 'none';
}



function spin1 () {
let a = [{id: 1, int: 300},{id: 2, int: 300},{id: 3, int: 300},{id: 4, int: 300},{id: 5, int: 300},{id: 6, int: 300}, {id: 7, int: 300}, {id: 8, int: 300}];

let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i].int;
}

let rand = Math.floor(Math.random() * sum);

let i = 0;
for (let s = a[0].int; s <= rand; s += a[i].int) {
  i++;
}

console.log(a[i].id);

if (a[i].id === 1) {
	container.style.transform = 'rotate(1080deg)'
}
if (a[i].id === 2) {
	container.style.transform = 'rotate(1025deg)'
}
if (a[i].id === 3) {
	container.style.transform = 'rotate(1710deg)'
}
if (a[i].id === 4) {
	container.style.transform = 'rotate(2025deg)'
}
if (a[i].id === 5) {
	container.style.transform = 'rotate(1980deg)'
}
if (a[i].id === 6) {
	container.style.transform = 'rotate(1935deg)'
}
if (a[i].id === 7) {
	container.style.transform = 'rotate(2250deg)'
}
if (a[i].id === 8) {
	container.style.transform = 'rotate(2205deg)'
}
}