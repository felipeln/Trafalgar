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