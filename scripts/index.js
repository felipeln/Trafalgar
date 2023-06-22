const mobileBtn = document.querySelector('.mobile-btn')

const menuList = document.querySelector('#menu-list')

const menuLinks = document.querySelectorAll('#menu-list li a')

mobileBtn.addEventListener('click',() => {
    mobileBtn.classList.toggle('open')

    if(mobileBtn.classList.contains('open')){
        menuList.classList.add('ativo')
    }else{
        menuList.classList.remove('ativo')
    }
})

for (const link of menuLinks) {
    link.addEventListener('click', () => {
        
        if(mobileBtn.classList.contains('open')){
            mobileBtn.classList.remove('open')
            menuList.classList.remove('ativo')
        }
    })
}



let utils = window.fizzyUIUtils;

let carousel = document.querySelector('.customers')

let flkty = new Flickity (carousel, {
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    autoPlay: true, // every 3s
    
    prevNextButtons: false,
    pageDots: false
})


let  indicators = document.querySelector('.carousel-indicators')

let dotButtons = utils.makeArray(indicators.querySelectorAll('.dot'))

flkty.on('select', function() {
    let previousSelectedBtn = document.querySelector('.selecionado')

    let selectedBtn = indicators.querySelectorAll('.dot')[flkty.selectedIndex]

    previousSelectedBtn.classList.remove('selecionado')
    selectedBtn.classList.add('selecionado')
})



indicators.addEventListener('click', function(event) {
    if ( !matchesSelector( event.target, '.dot' ) ) {
        return;
      }

    let index = dotButtons.indexOf(event.target)
    flkty.select(index)
})


// previous
let previousButton = document.querySelector('.left-arrow');
previousButton.addEventListener( 'click', function() {
  flkty.previous();
});
// next
let nextButton = document.querySelector('.right-arrow');
nextButton.addEventListener( 'click', function() {
  flkty.next();
});
