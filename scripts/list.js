const swiper = new Swiper('.my-slider', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    speed: 600,
    preventClicks: true,
    slidesPerView: 1.4,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    on: {
        click(event){
            swiper.slideTo(this.clickedIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const btn = document.getElementsByClassName("up-btn")[0];
btn.addEventListener('click',() =>{
    window.scrollTo({top:0, behavior: 'smooth'})
})


const right_menu = document.querySelector('.right-menu');

const btn_menu_open = document.querySelector('.header .menu');

btn_menu_open.addEventListener('click',() =>{
    right_menu.classList.add('active');
})

const btn_menu_close = document.querySelector('.right-menu .menu');

btn_menu_close.addEventListener('click',() =>{
    right_menu.classList.remove('active');
})
