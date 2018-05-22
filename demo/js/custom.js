/*
Template Name: Wrapkit Ui Kit
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";

    // ============================================================== 
    //This is for preloader
    // ============================================================== 

    $(function() {
        $(".preloader").fadeOut();
    });

    // ============================================================== 
    // Resize all elements
    // ============================================================== 

    $("body").trigger("resize");

    // ============================================================== 
    // Animation initialized
    // ============================================================== 

    AOS.init();

    // ============================================================== 
    // Tooltips
    // ============================================================== 

    $('[data-toggle="tooltip"]').tooltip()

    // ============================================================== 
    // testimonial
    // ============================================================== 

    $('.testi3').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1170: {
                items: 3
            }
        }
    });

    $('.testi4').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1170: {
                items: 1
            }
        }
    });

    // ============================================================== 
    // show more less
    // ============================================================== 

    $('#show_more').on('click', function(e) {
        $('.features-table').addClass('h-auto');
    });
    $('#show_less').on('click', function(e) {
        $('.features-table').removeClass('h-auto');
    });

});