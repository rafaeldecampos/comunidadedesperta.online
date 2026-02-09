/**
 * @file navigation.js
 * @description Gerencia navegação, menu mobile e scroll suave
 */

export class Navigation {
    constructor() {
        this.headerElement = document.getElementById('header');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        this.init();
    }

    init() {
        this.setupHeaderScroll();
    }

    /**
     * Alterna a visibilidade do menu mobile
     */
    toggleMobileMenu() {
        this.mobileMenu?.classList.toggle('active');
        this.mobileMenuOverlay?.classList.toggle('active');
    }

    /**
     * Fecha o menu mobile
     */
    closeMobileMenu() {
        this.mobileMenu?.classList.remove('active');
        this.mobileMenuOverlay?.classList.remove('active');
    }

    /**
     * Realiza scroll suave até uma seção
     * @param {Event} event - Evento do clique
     * @param {string} sectionId - ID da seção
     */
    scrollToSection(event, sectionId) {
        event.preventDefault();
        
        const element = document.getElementById(sectionId);
        if (!element) return;

        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Fechar menu mobile se estiver aberto
        this.closeMobileMenu();
    }

    /**
     * Adiciona efeito ao header quando a página é scrollada
     */
    setupHeaderScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                this.headerElement?.classList.add('scrolled');
            } else {
                this.headerElement?.classList.remove('scrolled');
            }
        });
    }
}
