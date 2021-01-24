const clock = document.querySelector(".js-clock h1")
const currentTime = new Date()
const hours = currentTime.getHours()
const minites = currentTime.getMinutes()
const seconds = currentTime.getSeconds()
clock.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`} : ${
	minites < 10 ? `0${minites}` : `${minites}`
} : ${seconds < 10 ? `0${seconds}` : `${seconds}`}`
