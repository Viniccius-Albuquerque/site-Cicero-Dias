document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const tela = document.getElementById('telaDescanso');
    let currentSlide = 0;

    // Troca de slides
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 8000); // 8 segundos por foto

    // Clique em qualquer lugar para avançar
    tela.addEventListener('click', () => {
        window.location.href = "templates/sobreOmuseu.html";
    });
});