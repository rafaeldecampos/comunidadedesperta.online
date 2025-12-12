// Inicializa os ícones Lucide
lucide.createIcons();

// Variáveis do slider
let currentSlide = 0;
const slides = document.querySelectorAll('.about-image img');
const dots = document.querySelectorAll('.slider-dot');
const totalSlides = slides.length;

let slideInterval; // intervalo armazenado

// Função para mostrar um slide específico
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Função para trocar de slide (chamada pelos dots)
function changeSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);

    // RESETAR O TEMPO QUANDO O USUÁRIO TROCA MANUALMENTE
    clearInterval(slideInterval);
    startSlideInterval();
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Função para iniciar o intervalo automático do slider
function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000); // 5 segundos
}

// Inicia o slider automático ao carregar a página
startSlideInterval();

// Função para toggle do menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Função para scroll suave até uma seção
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    
    // Fechar o menu mobile se estiver aberto
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Adicionar classe 'scrolled' ao header quando rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});