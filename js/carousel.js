document.addEventListener('DOMContentLoaded', function () {
    var prevBtn = document.querySelector('.carousel-prev');
    var nextBtn = document.querySelector('.carousel-next');
    var indicators = document.querySelectorAll('.carousel-indicator');
    var slides = document.querySelectorAll('.carousel-slide');
    var currentIndex = 0;
    var numSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            index = numSlides - 1;
        } else if (index >= numSlides) {
            index = 0;
        }

        slides.forEach(function (slide) {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });

        indicators.forEach(function (indicator) {
            indicator.classList.remove('active');
        });

        indicators[index].classList.add('active');

        currentIndex = index;
    }

    function slideToPrev() {
        showSlide(currentIndex - 1);
    }

    function slideToNext() {
        showSlide(currentIndex + 1);
    }

    prevBtn.addEventListener('click', slideToPrev);
    nextBtn.addEventListener('click', slideToNext);

    indicators.forEach(function (indicator, index) {
        indicator.addEventListener('click', function () {
            showSlide(index);
        });
    });
});
