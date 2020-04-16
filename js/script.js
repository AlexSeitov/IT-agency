// Fixed Header

$(function() {
    var header = $("#header"),
        featuresH = $("#features").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if( scrollOffset >= featuresH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
});

// Smooth scroll

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $(".nav__link").removeClass("nav__link--active");
    $this.addClass("nav__link--active");

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 500);
});


// Mobile menu

$(".nav-toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("nav-toggle--active");
    $(".nav").toggleClass("nav--active");
});

// Isotope

$('.works-gallery').isotope({
    itemSelector: '.works-gallery_item',
    layoutMode: 'fitRows',
});

$('.works-menu__item').click(function() {
    $('.works-menu__item').removeClass('works-menu__item--active');
    $(this).addClass('works-menu__item--active');

    let selector = $(this).attr('data-filter');
    $('.works-gallery').isotope ({
        filter: selector
    });
    return false;
});