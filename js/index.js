const menu = document.querySelector(".header__menu")
const openMenu = () => {
  menu.classList.toggle("active")
}
const names = document.querySelector(".hero7__input[name='name']")
const email = document.querySelector(".hero7__input[name='email']")
const website = document.querySelector(".hero7__input[name='website']")
const comment = document.querySelector(".hero7__input--active[name='comment']")
const sendData = () => {
  const nameData = names.value
  const emailData = email.value
  const websiteData = website.value
  const commentData = comment.value
  localStorage.setItem("name", nameData)
  localStorage.setItem("email", emailData)
  localStorage.setItem("website", websiteData)
  localStorage.setItem("comment", commentData)
}

const ask = document.querySelector(".hero__intro[name='addname']")
let clientName = prompt("what is your name?")
ask.innerHTML += `${clientName}`
const button = document.querySelector(".button")
const handler = () => {
  if (window.scrollY > 1000) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
const goTop = () => {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", handler)

const appear = document.querySelector(".hero8__answer")
const hero = document.querySelector(".hero8")
const yesBtn = document.querySelector(".hero8__block")
const noBtn = document.querySelector(".hero8__block--active")
const handlers = () => {
  const informationAboutBlock = noBtn.getBoundingClientRect()
  const centerHorScreen = window.innerWidth / 1.5
  const centerVerScreen = window.innerHeight / 1.5
  noBtn.style.transform = `translate(${centerHorScreen - event.clientX}px, ${centerVerScreen - event.clientY}px)`
}
window.addEventListener("mousemove", handlers)

const thank = () => {
  hero.style.display = "none"
  appear.style.display = "flex"
}

const block = document.querySelector(".hero__article")
const img = document.querySelector(".hero__img")
const biggerGap = () => {
  let count = window.scrollY
  block.style.transform = `translateX(${-count*0.2}px)`
  img.style.transform = `translateX(${count*0.2}px)`
}
window.addEventListener("scroll", biggerGap)

const img2 = document.querySelector(".hero4__img")
const move = () => {
  const centerHorScreen = window.innerWidth / 10
  const centerVerScreen = window.innerHeight / 10
  img2.style.transform = `translate(${event.clientX / 10 - 100}px, ${event.clientY/10}px)`
}


window.addEventListener("mousemove", move)
