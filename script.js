// Inicializa os ícones Lucide
if (window.lucide) {
    lucide.createIcons();
}

/* ===================== SLIDER ===================== */
const slides = document.querySelectorAll('.about-image img');
const dots = document.querySelectorAll('.slider-dot');
const totalSlides = slides.length;

let currentSlide = 0;
let slideInterval = null;

const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
}

function changeSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    restartSlideInterval();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function startSlideInterval() {
    if (totalSlides > 1 && !reduzMovimento && !slideInterval) {
        slideInterval = setInterval(nextSlide, 5000);
    }
}

function stopSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = null;
}

function restartSlideInterval() {
    stopSlideInterval();
    startSlideInterval();
}

// Pausa o slider quando a aba não está visível (economiza recursos)
document.addEventListener('visibilitychange', () => {
    document.hidden ? stopSlideInterval() : startSlideInterval();
});

startSlideInterval();

/* ===================== CHAVE PIX ===================== */
let copyTimeout = null;

function copyPixKey() {
    const pixKeyEl = document.getElementById('pixKey');
    const copyText = document.getElementById('copyText');
    if (!pixKeyEl || !copyText) return;

    const pixKey = pixKeyEl.textContent.trim();

    const feedback = () => {
        copyText.textContent = 'Copiado!';
        clearTimeout(copyTimeout);
        copyTimeout = setTimeout(() => {
            copyText.textContent = 'Copiar Chave';
        }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(pixKey).then(feedback).catch(() => fallbackCopy(pixKey, feedback));
    } else {
        fallbackCopy(pixKey, feedback);
    }
}

// Fallback para navegadores antigos ou contexto sem HTTPS
function fallbackCopy(texto, callback) {
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        callback();
    } catch (err) {
        console.error('Erro ao copiar:', err);
    }
    document.body.removeChild(textarea);
}

/* ===================== MENU MOBILE ===================== */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const btnMenu = document.querySelector('.mobile-menu-btn');
    if (!mobileMenu || !overlay) return;

    const aberto = mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active', aberto);

    // Trava o scroll do fundo enquanto o menu está aberto
    document.body.style.overflow = aberto ? 'hidden' : '';

    if (btnMenu) btnMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        overlay?.classList.remove('active');
        document.body.style.overflow = '';
        document.querySelector('.mobile-menu-btn')?.setAttribute('aria-expanded', 'false');
    }
}

// Fecha o menu com a tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
});

/* ===================== SCROLL SUAVE ===================== */
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: reduzMovimento ? 'auto' : 'smooth'
        });

        // Mantém a âncora na URL sem provocar salto
        history.replaceState(null, '', '#' + sectionId);
    }
    closeMobileMenu();
}

/* ===================== HEADER AO ROLAR ===================== */
const header = document.getElementById('header');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking && header) {
        window.requestAnimationFrame(() => {
            header.classList.toggle('scrolled', window.scrollY > 20);
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });