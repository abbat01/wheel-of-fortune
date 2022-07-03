const circleC = document.querySelector(".circleC")
const heading = document.querySelector('.main__heading')
const p = document.querySelector('.heading__p')
const prize1 = document.querySelector('.prize1');
const prize2 = document.querySelector('.prize2');
const prize3 = document.querySelector('.prize3');
const prize4 = document.querySelector('.prize4');
const prize5 = document.querySelector('.prize5');
const prize6 = document.querySelector('.prize6');
const prize7 = document.querySelector('.prize7');
const prize8 = document.querySelector('.prize8');


const prize = document.getElementById('prize');
const time = document.getElementById('time');

let container = document.querySelector(".container");
let btn = document.getElementById("spin");



let modal = document.querySelector('.modal--window')

function closeModal() {
modal.style.display = 'none';
}

const spinbtn = document.querySelector('.footer__btn')
spinbtn.addEventListener('click', function() {
	modal.style.display = 'flex';
	spinbtn.style.display = 'none'
	circleC.style.top = '53%'
})

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
		validateForm()
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
			container.style.filter = 'blur(4px)'
			const modalPrize = document.querySelector('.modal--prize');
			circleC.style.top = '48.5%'
			modalPrize.style.display = 'block';
			if (a[i].id === 'Секретный подарок из Алтая') {
				prize1.style.display = 'block'
			}
			if (a[i].id === '10% скидка на любое наше путешествие') {
				prize2.style.display = 'block'
			}
			if (a[i].id === 'Именное полотенце от Fresh Adventures') {
				prize3.style.display = 'block'
			}
			if (a[i].id === '5% скидка на любое наше путешествие') {
				prize4.style.display = 'flex'
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
		function validateForm() {
			let x = document.forms["myForm"]["data[first name]"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
		}
		

		function spin6() {
			
			if (a[i].id === 'Секретный подарок из Алтая') {
				prize1.style.display = 'block'
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
		}

		








		
