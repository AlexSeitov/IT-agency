// mobile menu

$(".nav-toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("nav-toggle--active");
    $(".nav").toggleClass("nav--active");
});

// isotope

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