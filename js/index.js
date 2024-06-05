document.addEventListener('DOMContentLoaded', function () {

    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const track = document.querySelector('.carousel-track');
    let slides = Array.from(track.children);
    const slidesToShow = 3; // Número de slides para mostrar de cada vez
    
    // Duplicar todos os slides
    for (let i = 0; i < slides.length; i++) {
        const cloneSlide = slides[i].cloneNode(true);
        track.appendChild(cloneSlide);
    }
    
    slides = Array.from(track.children); // Atualizar a lista de slides
    const totalSlides = slides.length;
    
    let currentIndex = 0;
    
    function updateCarousel() {
        const slideWidth = track.getBoundingClientRect().width / slidesToShow;
        track.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
    }
    
    function moveToNextSlide() {
        currentIndex++;
        if (currentIndex === totalSlides / 2) {
            // atraso de 500ms
            setTimeout(() => {
                currentIndex = 0;
                track.style.transition = 'none';
                updateCarousel();
                // criando uma transição suave
                requestAnimationFrame(() => {
                    track.style.transition = 'transform 0.5s ease';
                    updateCarousel();
                });
            }, 500);
        } else {
            track.style.transition = 'transform 0.5s ease';
            updateCarousel();
        }
    }
    
    function moveToPrevSlide() {
        if (currentIndex === 0) {
            currentIndex = totalSlides / 2;
            track.style.transition = 'none';
            updateCarousel();
            requestAnimationFrame(() => {
                track.style.transition = 'transform 0.5s ease';
                updateCarousel();
            });
        }
        currentIndex--;
        track.style.transition = 'transform 0.5s ease';
        updateCarousel();
    }
    
    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);
    
    setInterval(moveToNextSlide, 3000);
});