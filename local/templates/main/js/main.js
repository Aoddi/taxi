
let elements = document.querySelectorAll('#conditions');
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', function() {
		let modal_title = 'Условия проведения розыгрыша'
		let modal_text = 'Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Повседневная практика показывает, что консультация с широким активом позволяет выполнять важные задания по разработке модели развития. Равным образом укрепление и развитие структуры позволяет выполнять важные задания по разработке соответствующий условий активизации. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации модели развития. Товарищи! дальнейшее развитие различных форм деятельности способствует подготовки и реализации систем массового участия. Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки модели развития.'
		document.querySelector('#modal_title').innerHTML = modal_title
		document.querySelector('#modal_text').innerHTML = modal_text
		document.querySelector('#modal-container').classList.remove('out');
		document.querySelector('#modal-container').classList.add('four');
		document.querySelector('body').classList.add('modal-active');
	});
}

let elements2 = document.querySelectorAll('#privacy');
for (let i = 0; i < elements2.length; i++) {
	elements2[i].addEventListener('click', function() {
		let modal_title = 'Политика конфиденциальности'
		let modal_text = 'Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Повседневная практика показывает, что консультация с широким активом позволяет выполнять важные задания по разработке модели развития. Равным образом укрепление и развитие структуры позволяет выполнять важные задания по разработке соответствующий условий активизации. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации модели развития. Товарищи! дальнейшее развитие различных форм деятельности способствует подготовки и реализации систем массового участия. Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки модели развития.'
		document.querySelector('#modal_title').innerHTML = modal_title
		document.querySelector('#modal_text').innerHTML = modal_text
		document.querySelector('#modal-container').classList.remove('out');
		document.querySelector('#modal-container').classList.add('four');
		document.querySelector('body').classList.add('modal-active');
	});
}

document.querySelector('#modal-container').onclick=(function(){
	// console.log('hiii')
	document.querySelector('#modal-container').classList.add('out');
	document.querySelector('#modal-container').classList.remove('four');
	document.querySelector('body').classList.remove('modal-active');
});

// accordion
let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.accordion__title');

function toggleAccordion() {
	let thisItem = this.parentNode;
	items.forEach(item => {
		if (thisItem == item ) {
			thisItem.classList.toggle('active');
			return;
		}
		item.classList.remove('active');
	});
}
title.forEach(question => question.addEventListener('click', toggleAccordion));

// show more
window.addEventListener('resize', resize);
function resize() {
	if (window.innerWidth < 1366) {
		let btn = document.getElementById('button');
		btn.style.display = "block";
		show_more()
	} else {
		let btn = document.getElementById('button');
		btn.style.display = "none";
	}
}

function show_more() {
	let box = document.getElementsByClassName('accordion__item');
	// console.log(box)
	let btn = document.getElementById('button');
	for (let i=5; i<box.length; i++) {
		box[i].style.display = "none";
	}
	let countD = 5;
	btn.addEventListener("click", function() {
		let box=document.getElementsByClassName('accordion__item');
		countD += 7;
		// количество появитс
		if (countD <= box.length){
			for(let i=0; i<countD; i++){
				box[i].style.display = "block";
			}
		}
	})
}

window.addEventListener('resize', display_block);
function display_block() {
	if (window.innerWidth > 1366) {
		let box2=document.getElementsByClassName('accordion__item');
		// console.log(box2)
		for (let i=0; i<box2.length; i++) {
			box2[i].style.display = "block"
		}
	}
}

// input mask
window.addEventListener("DOMContentLoaded", function() {
	[].forEach.call( document.querySelectorAll('.tel'), function(input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___ ____",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function(a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function(a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5)  this.value = ""
		}
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	});
});

// to top btn
function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;
	if (scrolled > coords) {
		goTopBtn.classList.add('back_to_top-show');
	}
	if (scrolled < coords) {
		goTopBtn.classList.remove('back_to_top-show');
	}
}
function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 0);
	}
}
var goTopBtn = document.querySelector('.back_to_top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
// swiper
const menuSwiper = ['Slide 1', 'Slide 2', 'Slide 3'];
const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,
	centeredSlides: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	// 	renderBullet: function (index, className) {
	// 		return '<span class="' + className + '">' + (menuSwiper[index]) + '</span>';
	// 	},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

// плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
			document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// изменения шапки при скролле
addEventListener('scroll', function () {
	// console.log(window.pageYOffset)
	let scroll = window.pageYOffset
	let headElement = document.querySelector(".header-container")
	let headWrap = document.querySelector(".header-wrapper")
	let menuBtn = document.querySelector(".menu-btn")

	if (scroll > 10) {
		headElement.classList.add('minimize')
		headWrap.style.boxShadow = "0px 0px 40px rgb(0 0 0 / 8%)"

	} else {
		headElement.classList.remove('minimize')
		headWrap.style.boxShadow = "none"
	}
})

// скрытие меню при клике на пункт меню
let menu = document.querySelectorAll('.menu-item_burger');
let closeBtn = document.querySelector(".close")
for (let i = 0; i < menu.length; i++) {
	menu[i].addEventListener('click', function() {
		closeBtn.click()
	});
}

// калькулятор
var hours = 6
var week = 7
var fuel = 20
var dayz = (3 * (200 - 7) * ((Number(fuel) /100) * 45))

function summ () {
	// console.log((Number(hours) * Number(week) * Number(fuel)) + '0')



//	Прибыль в месяц = Часов в день (A) * Кол-во дней (B) * 4 * (200 – 7 * Расход бензина на 100 км ©  / 100 * 45) * 3

	document.querySelector('#summ').textContent = Math.round(Number(hours) * Number(week) * 4 * (200 - 7 * ((Number(fuel) /100) * 45)) * 3);
}

document.getElementById("hours").oninput = function() {
	var value = (this.value-this.min)/(this.max-this.min)*100
	// console.log(Number(String(value)[0])+1)
	hours = (this.value)
	document.querySelector('#day__calc').textContent = (this.value);
	summ();
	this.style.background = 'linear-gradient(to right, #FF8400 0%, #FF8400 ' + value + '%, #F0EFEE ' + value + '%, #F0EFEE 100%)'
};

document.getElementById("weeks").oninput = function() {
	// console.log(this.value)
	var value = (this.value-this.min)/(this.max-this.min)*100
	// console.log(value)
	// console.log(Number(String(value)[0])+1)
	let fix = value
	let newVal = (Number(String(value)[0])+1)
	let endVal = (Number(String(value)[0])+1)
	if (newVal == 4) {endVal = 3} else if (newVal == 6) {endVal = 4} else if (newVal == 7) {endVal = 5} else if (newVal == 9) {endVal = 6} else if (fix == 100) {endVal = 7}
	// console.log('endVal' + endVal)
	week = endVal
	document.querySelector('#week_day').textContent = endVal;
	summ();
	this.style.background = 'linear-gradient(to right, #FF8400 0%, #FF8400 ' + value + '%, #F0EFEE ' + value + '%, #F0EFEE 100%)'
};

document.getElementById("fuel").oninput = function() {
	// console.log(this.value)
	var value = (this.value-this.min)/(this.max-this.min)*100
	// console.log(value)
	// console.log('new val'+' '+Number(String(value)[0]))
	let fix = value
	let newVal = (Number(String(value)[0]))
	let endVal = (Number(String(value)[0])+1)
	if (fix == 100) {endVal = 24} else if (newVal == 1) {endVal = 4} else if (newVal == 3) {endVal = 8} else if (newVal == 5) {endVal = 12} else if (newVal == 6) {endVal = 16} else if (newVal == 8) {endVal = 20}
	// console.log('endVal'+'-' + endVal)
	fuel = endVal
	fuel = (this.value)
	document.querySelector('#fuel__100').textContent = (this.value);
	summ();
	this.style.background = 'linear-gradient(to right, #FF8400 0%, #FF8400 ' + value + '%, #F0EFEE ' + value + '%, #F0EFEE 100%)'
};
