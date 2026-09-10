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

const btn_menu = document.getElementsByClassName("menu")[0];
btn.addEventListener('click',() =>{
    window.scrollTo({top:0, behavior: 'smooth'})
})