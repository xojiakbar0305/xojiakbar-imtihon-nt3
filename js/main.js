let buttonOpen = document.querySelector('.button-open')
let navbarList = document.querySelector('.navbar__list')
let navbarSocials = document.querySelector('.navbar__socials')
let buttonClose = document.querySelector('.button-close')

buttonOpen.addEventListener('click', () => {
  navbarList.classList.toggle('open--menu')
  navbarSocials.classList.toggle('menu--flex')
  buttonOpen.classList.add('close--img')
  buttonClose.classList.add('open--menu')
})

// close
buttonClose.addEventListener('click', () => {
  navbarList.classList.toggle('open--menu')
  navbarSocials.classList.toggle('menu--flex')
  buttonOpen.classList.remove('close--img')
  buttonClose.classList.remove('open--menu')
})