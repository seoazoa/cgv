$(document).ready(function(){
    var swiper = new Swiper(".movieSwiper" , {
        direction: "horizontal",
        loop:true,
        slidesPerView: 5,
        spaceBetween: 30,
        // navigation
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        // breakpoints:{
        //     // 320 이상일때
        //     320:{
        //         slidesPerView:1,
        //     },
        //     // 480 이상일때
        //     480:{
        //         slidesPerView:2,
        //         spaceBetween: 30,
        //     },
        //     // 768 이상일때
        //     768:{
        //         slidesPerView:5,
        //         // spaceBetween: 30,
        //     },
        // }
    })
    })