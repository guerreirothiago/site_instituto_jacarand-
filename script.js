document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Ativar o botão hambúrguer na navbar
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }

    // Reproduzir vÃ­deos apenas quando estiver passando o mouse
    document.querySelectorAll('[data-hover-play]').forEach(video => {
        const playOnHover = () => {
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => {});
            }
        };
        const pauseOnLeave = () => {
            video.pause();
        };
        video.addEventListener('mouseenter', playOnHover);
        video.addEventListener('focus', playOnHover);
        video.addEventListener('mouseleave', pauseOnLeave);
        video.addEventListener('blur', pauseOnLeave);
    });
});
