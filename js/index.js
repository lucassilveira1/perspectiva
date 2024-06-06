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

    // MODAL
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModal = document.getElementsByClassName("close")[0];
    const thumbnails = document.getElementsByClassName("thumbnail");

    for (let thumbnail of thumbnails) {
        thumbnail.addEventListener("click", function () {
            const videoSrc = thumbnail.getAttribute("data-video");
            modalVideo.src = videoSrc;
            modal.style.display = "block";
        });
    }

    closeModal.onclick = function () {
        modal.style.display = "none";
        modalVideo.src = "";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalVideo.src = "";
        }
    }

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle("show-answer");
            const arrow = this.querySelector(".arrow");
            arrow.classList.toggle("rotated");
            const answerParagraph = answer.querySelectorAll(".faq-answer");
            card.classList.toggle("active"); 
            
            answerParagraph.classList.toggle("black-text", card.classList.contains("active"));
            arrow.style.transition = "transform 0.3s ease";
            
            if (arrow.classList.contains("rotated")) {
                arrow.style.transform = "rotate(180deg)";
            } else {
                arrow.style.transform = "rotate(0deg)";
            }

        });
    });

    document.getElementById('scrollButton').addEventListener('click', function() {
        document.getElementById('pay-section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('scrollar').addEventListener('click', function() {
        document.getElementById('pay-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
});