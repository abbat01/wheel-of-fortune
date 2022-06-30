const button = document.querySelector('#spin');
button.addEventListener('click', function() {
	spin1()
	button.disabled = true
})
const prize = document.getElementById('prize');
const time = document.getElementById('time');

let container = document.querySelector(".container");
let btn = document.getElementById("spin");



let modal = document.querySelector('.modal--window')

function closeModal() {
modal.style.display = 'none';
}

window.onload = function() {
	spin1()
	spin3()
	spin5()
}


let a;
let sum;
let rand;
let i;
let randNumber
		function spin1 () {
			a = [{id: 'Секретный подарок из Алтая', int: 3},{id: '10% скидка на любое наше путешествие', int: 10},{id: 'Именное полотенце от Fresh Adventures', int: 2},{id: '5% скидка на любое наше путешествие', int: 5000},{id: 'Именная майка от Fresh Adventures', int: 2},{id: 'Секретный подарок из Гималаев', int: 3}, {id: 'Путешествие в Полесье', int: 1}, {id: '50% скидка на путешествие в Каппадокию', int: 0}];


		sum = 0;
		for (let i = 0; i < a.length; i++) {
		sum += a[i].int;
		}

		rand = Math.floor(Math.random() * sum);

		i=0;
		for (let s = a[0].int; s <= rand; s += a[i].int) {
		i++;
		}
return randNumber = a[i].id
		}
	function spin2() {
		if (a[i].id === 'Секретный подарок из Алтая') {
			container.style.transform = 'rotate(1080deg)'
		}
		if (a[i].id === '10% скидка на любое наше путешествие') {
			container.style.transform = 'rotate(1025deg)'
		}
		if (a[i].id === 'Именное полотенце от Fresh Adventures') {
			container.style.transform = 'rotate(1710deg)'
		}
		if (a[i].id === '5% скидка на любое наше путешествие') {
			container.style.transform = 'rotate(2025deg)'
		}
		if (a[i].id === 'Именная майка от Fresh Adventures') {
			container.style.transform = 'rotate(1980deg)'
		}
		if (a[i].id === 'Секретный подарок из Гималаев') {
			container.style.transform = 'rotate(1935deg)'
		}
		if (a[i].id === 'Путешествие в Полесье') {
			container.style.transform = 'rotate(2250deg)'
		}
		if (a[i].id === '50% скидка на путешествие в Каппадокию') {
			container.style.transform = 'rotate(2205deg)'
		}
		
		setTimeout(() => { 
			const modalPrize = document.querySelector('.modal--prize');
			const modalPrizeDiv = document.createElement('h2');
			modalPrizeDiv.innerHTML = `<div class='modal__heading'>${a[i].id}</div>`;
			modalPrize.style.display = 'block';
			modalPrize.appendChild(modalPrizeDiv);
		 }, 10000);
	}



var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {

          });
        });
		
		function spin3() {

			prize.value = a[i].id;
			prize.setAttribute('name', 'data[prize]')
		}

		function spin5() {
			let date = new Date();
			time.value = date;
			time.setAttribute('name', 'data[time]')
		}






		
