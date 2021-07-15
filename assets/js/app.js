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
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function ChangeHeaderScroll() {
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}


/* SWIPER CAROUSEL TESTIMONIALS */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true, 
    keyboard: true,

    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }

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
 #contact .text, #contact .links,
 footer .brand, footer .social`,
 

{ interval: 100} )

/* BOTÃO DE VOLTAR PARA O TOP*/

 

const backToTop = document.querySelector('.back-to-top');
function BackToTop () {
    if(window.scrollY >= 560) {
        backToTop.classList.add('show');
    }
    else{
        backToTop.classList.remove('show');
    }

}

/* Menu ativo conforme seção na página */

const sections = document.querySelectorAll('main section[id]')
console.log(sections)

function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 // pega o deslocamento Y da janela e faz um cálculo
    // para cada seção,
    for (const section of sections){
        const sectionTop = section.offsetTop // pega o topo da seção
        const sectionHeight = section.offsetHeight // pega a altura da secao
        const sectionID = section.getAttribute('id') // pode pegar atributo atrás da section, passando o nome do atributo

        const startLimit = checkpoint >= sectionTop // desde que o checkpoint seja maior ou igual o topo da seção
        const endLimit = checkpoint <= sectionTop + sectionHeight // adiciona o topo da secao + o tamanho dela e delimita o limit dessa section
        
        if (startLimit && endLimit){ // se está entre o início da secao e o final
            document.querySelector(`nav ul li a[href*=${sectionID}]`).classList.add('active')
        } else {
            document.querySelector(`nav ul li a[href*=${sectionID}]`).classList.remove('active')
        }
    }
}

window.addEventListener('scroll', function() {
    ChangeHeaderScroll();
    BackToTop();
    activateMenuAtCurrentSection()
})



