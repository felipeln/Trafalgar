function initMobileMenu(){
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
 
}initMobileMenu()

function initCarousel(){
    let utils = window.fizzyUIUtils;

    let carousel = document.querySelector('.customers')

    let flkty = new Flickity (carousel, {
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 5000, // every 3s
        
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
}initCarousel()


// smooth link scroll
function initNavScroll(){
    const menuLinks = document.querySelectorAll('.js-menu a[href^="#"]')

    function navScroll(event){
      event.preventDefault()
      const href =  event.currentTarget.getAttribute('href')
      console.log(href);

      const section = document.querySelector(href)
    
      const y = section.offsetTop - 40
      window.scrollTo({
        behavior: 'smooth',
        top: y
      })
    }

    menuLinks.forEach((link) =>{
        link.addEventListener('click', navScroll)
        
    })
}initNavScroll()


// smmoth page scrol
function initPageScroll(){
    const sections = document.querySelectorAll('.js-scroll')

    function pageScroll(){
        const windowViewHeight = window.innerHeight * 0.6

        sections.forEach((section) =>{
            const top = section.getBoundingClientRect().top
            const isSectionVisible = (top - windowViewHeight) < 0

            if(isSectionVisible){
                section.classList.add('active')
            }
            
        })
    
    }
    pageScroll()
    window.addEventListener('scroll', pageScroll)
}initPageScroll()