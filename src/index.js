// import './clinics.html'
import './fonts/fonts.css'
import './styles.css'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

const swiperBurabay = new Swiper('.swiper-burabay', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// let menus = [...document.querySelectorAll('.circular-menu')]

// menus.map(menu => {
// 	let items = menu.querySelectorAll('.circular-menu__item')
// 	// let button = document.querySelectorAll('.circular-menu__button')

// 	// let active = false

// 	const lenght = items.lenght
// 	const arc = 2 * Math.PI * (1 / lenght)
// 	const radius = 40

// 	// button.addEventListener('click', e => {
// 	// 	e.preventDefault()
// 	// 	active != active

// 	// 	if (active) {
// 	// 		button.classList.add('active')

// 	// 		for (let i = 0; i < lenght; i++) {
// 	// 			const angle = i * arc
// 	// 			const x = radius * Math.cos(angle)
// 	// 			const y = radius * Math.sin(angle)

// 	// 			items[i].style.left = 50 + x + '%'
// 	// 			items[i].style.top = 50 + y + '%'
// 	// 		}
// 	// 	} else {
// 	// 		button.classList.remove('active')

// 	// 		for (let i = 0; i < lenght; i++) {
// 	// 			items[i].removeAttribute('style')
// 	// 		}
// 	// 	}
// 	// })

// 	for (let i = 0; i < lenght; i++) {
// 		const angle = i * arc
// 		const x = radius * Math.cos(angle)
// 		const y = radius * Math.sin(angle)

// 		items[i].style.left = 50 + x + '%'
// 		items[i].style.top = 50 + y + '%'
// 	}
// })
