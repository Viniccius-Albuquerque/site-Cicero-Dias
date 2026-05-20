document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const tela = document.getElementById('telaDescanso');
    let currentSlide = 0;

    // Verifica se os slides realmente existem na tela para evitar erros
    if (slides.length === 0) return;

    // Troca de slides
    function nextSlide() {
        // Remove a classe do slide que estava ativo
        slides[currentSlide].classList.remove('active');
        
        // Calcula o próximo índice
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Adiciona a classe no novo slide correspondente
        slides[currentSlide].classList.add('active');
    }

    // Configura o temporizador para 8 segundos
    setInterval(nextSlide, 8000); 

    // Clique em qualquer lugar para avançar para a página principal
    tela.addEventListener('click', () => {
        window.location.href = "templates/sobreOmuseu.html";
    });
});