document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica do Menu Mobile
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuIcon.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu
        mainNav.classList.toggle('active');
        // Alterna a classe 'change' para animar o ícone
        mobileMenuIcon.classList.toggle('change');
    });

    // 2. Lógica do Header que muda de cor ao rolar
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Lógica da Animação de Fade-in dos produtos
    const productCards = document.querySelectorAll('.product-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o card está na tela, adiciona a classe 'visible'
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // O gatilho é acionado quando 10% do card está visível
    });

    // Observa cada card de produto
    productCards.forEach(card => {
        observer.observe(card);
    });

});