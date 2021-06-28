$(document).ready(function(){
    const nexticon = '<i class="fas fa-arrow-right"></i>'
    const previcon = '<i class="fas fa-arrow-left"></i>'

 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[previcon, nexticon],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});