// elementi catturati
let navbar = document.querySelector('.navbar')
let navLinks = document.querySelectorAll ('.nav-link')
let iconCustom =document.querySelector ('.icon-custom')
let since = document.querySelector ('#since')
let reviews = document.querySelector ('#reviews')
let items = document.querySelector ('#items')
let products = document.querySelector ('#products')

// Eventi

window.addEventListener('scroll' , () =>{
    if ( window.scrollY > 0){
        navbar.style.backgroundColor = 'var(--main-green)';
        navLinks.forEach((navlink) => {
            navlink.style.color = 'white'
            iconCustom.style.color = 'white'

        })
    } else {
        navbar.style.backgroundColor = 'white';
        navLinks.forEach((navlink) => {
            navlink.style.color = 'black'
            iconCustom.style.color = 'var(--main-green)';
        })
       
    }
})

// contatori

let counter = 0;

let interval = setInterval(() =>{
    if (counter < 500){
        counter++ ;
        reviews.innerHTML = counter
    }else if (counter < 2000) {
        counter++ ;
        since.innerHTML = counter
       
    }else if (counter < 2752) {
        counter++ ;
        products.innerHTML = counter
       
    }
    else if (counter < 3537) {
        counter++ ;
        items.innerHTML = counter
       
    }else {
        clearInterval(interval)
    }
    
})











/* inizializzazione animation scroll */

AOS.init();