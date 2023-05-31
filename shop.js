// elementi catturati navbar
let navbar = document.querySelector('.navbar')
let navLinks = document.querySelectorAll ('.nav-link')
let iconCustom =document.querySelector ('.icon-custom')


// Evento scroll navbar
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


//collegamento file.json
fetch('./shop.json')
.then((response) => response.json())
.then((data) => {

    let categoriesWrapper = document.querySelector('#categoriesWrapper');
    // funzione creazione cards 
    function createCards() {
        data.forEach((card) =>{
            let div = document.createElement('div');
            div.classList.add('col-12', 'col-md-6' , 'my-3');
            div.innerHTML = ` 
                <div class="card" style="width: 18rem;">
                                
                    <img src="${card.url}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h6 class="card-title text-truncate" title="${card.name}">${card.name}</h6>
                        <h6 class="card-title">${card.category}</h6>
                        <p>€<span>${card.price}</span></p>
                        <div>
                            <button type="button" class="btn bg-button button-size-shop"><i class="fa-solid fa-cart-shopping fa-lg me-2" style="color: #ffffff;"></i >Aggiungi al carrello</button>
                        </div>
                            <i class="fa-regular fa-heart fa-lg mt-4" style="color: #ff0000;"></i>
                    </div>
                </div>`
            cardsWrapper.appendChild(div)


        })
   }
    createCards()

    // funzione per verificare le categorie non ripetute
    function filterCategories() {

        let categories = data.map((element) => element.category);
        let categoriesNotRepeated = [];

        categories.forEach((category) => {
            if(!categoriesNotRepeated.includes(category)){
                categoriesNotRepeated.push(category)
            }
        })

        //creazione input per ogni categoria
        categoriesNotRepeated.forEach((category) =>{
            let div = document.createElement('div');
            div.classList.add('form-check')
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                <label class="form-check-label" for="${category}">
                    ${category}
                </label>
            `

            categoriesWrapper.appendChild(div)
        })
       
    }

    filterCategories()


    let formCheckInput = document.querySelectorAll('.form-check-input');

    // funzione mostra per categoria
    function showForCategories() {
        formCheckInput.forEach((input) => {
            if(input.checked == true){
                console.log('ciao');
            }
        })

    }

    showForCategories()
    console.log(formCheckInput);

    formCheckInput.forEach((input) => {
        input.addEventListener('click', () => {
            showForCategories()
        })
    })

})