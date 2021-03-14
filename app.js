nav_show = () => {
    let burger = document.querySelector('.nav-burger')
    let nav = document.querySelector('.nav-links')
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-links-show')
    })
}
nav_show()

// Scroll animation
scroll_animation = () => {
    window.addEventListener('scroll',()=>{
        let main_head = document.querySelector('.main-head')
        main_head.classList.toggle('main-head-color-change',window.scrollY > 0)
    })
}
scroll_animation()