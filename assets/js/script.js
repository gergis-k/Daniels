$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    dots: false,
    stagePadding: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})