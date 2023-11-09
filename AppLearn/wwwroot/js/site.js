// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const carousel = document.querySelector('#gameCarousel');
const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleChange(e) {
    if (e.matches) {

        carousel.classList.remove('slide')

        var carouselWidth = $('.carousel-inner')[0].scrollWidth;
        var cardWidth = $('.carousel-item').width();

        var scrollPosition = 0;

        $('.carousel-control-next').on('click', function () {
            if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
                scrollPosition = scrollPosition + cardWidth;
                $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
            }
        });

        $('.carousel-control-prev').on('click', function () {
            if (scrollPosition > 0) {
                scrollPosition = scrollPosition - cardWidth;
                $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
            }
        });

    }
    else {
        carousel.classList.add('slide');
    }
}

mediaQuery.addListener(handleChange)
handleChange(mediaQuery)
