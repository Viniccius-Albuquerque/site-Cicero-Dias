// scripts/descanso.js
document.addEventListener('DOMContentLoaded', function() {
    const telaDescanso = document.getElementById('telaDescanso');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    if (!telaDescanso || slides.length === 0) return;

    // Função para trocar de slide
    function nextSlide() {
        // Remove active de todos
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Avança para o próximo slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Ativa o novo slide
        slides[currentSlide].classList.add('active');
    }

    // Inicia o carrossel (troca a cada 10 segundos)
    setInterval(nextSlide, 10000);

    // Interação ao clicar (toque)
    function aoAtivarTotem(event) {
        console.log('Totem ativado - avançar para menu principal');
        
        // coloca a navegação para o Frame 2 futuramente
        // window.location.href = '/templates/menu.html';
    }
});