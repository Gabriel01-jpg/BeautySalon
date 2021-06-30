// DOM Document Object Model
/* Abre e fecha o menu quando clickar no ícone: três barras e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// Esconder o menu quando algum dos items for clickado

const links = document.querySelectorAll('nav ul li a')
for (const link of links){
    console.log(link)
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL */
const header = document.querySelector('#header')
const backToTop = document.querySelector('#back-to-top')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
        backToTop.classList.add('back-to-top')
    } else {
        header.classList.remove('scroll')
        backToTop.classList.remove('back-to-top')


    }
})


/* SWIPER CAROUSEL TESTIMONIALS */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true, 
    keyboard: true

  });

/* SCROLLREVEAL  */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`#home .text, #home .image
 #about .image, #about .text, 
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials,
 #contact .text, #contact .links`,

{ interval: 100} )