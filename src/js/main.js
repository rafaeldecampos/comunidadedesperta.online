/**
 * @file main.js
 * @description Arquivo principal que inicializa todos os módulos
 */

import { ImageSlider } from './slider.js';
import { Navigation } from './navigation.js';
import { ClipboardManager } from './clipboard.js';
import { initLucideIcons, onDOMReady } from './utils.js';

/**
 * Aplicação principal
 */
class App {
    constructor() {
        this.slider = null;
        this.navigation = null;
        
        this.init();
    }

    /**
     * Inicializa a aplicação
     */
    init() {
        onDOMReady(() => {
            this.initializeModules();
            this.setupEventListeners();
        });
    }

    /**
     * Inicializa os módulos
     */
    initializeModules() {
        // Inicializar ícones Lucide
        initLucideIcons();

        // Inicializar slider de imagens
        this.slider = new ImageSlider('.about-image img', '.slider-dot');

        // Inicializar navegação
        this.navigation = new Navigation();
    }

    /**
     * Configura os listeners de eventos
     */
    setupEventListeners() {
        // Toggle do menu mobile
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                this.navigation.toggleMobileMenu();
            });
        }

        // Overlay do menu mobile
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', () => {
                this.navigation.closeMobileMenu();
            });
        }

        // Botão de copiar PIX
        const copyPixBtn = document.querySelector('.btn-copy');
        if (copyPixBtn) {
            copyPixBtn.addEventListener('click', () => {
                ClipboardManager.copyPixKey();
            });
        }

        // Links de scroll suave no header
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const sectionId = link.getAttribute('href').substring(1);
                if (document.getElementById(sectionId)) {
                    this.navigation.scrollToSection(e, sectionId);
                }
            });
        });

        // Mudar slide ao clicar nos dots
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.slider?.changeSlide(index);
            });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', (e) => {
                this.navigation.scrollToSection(e, 'about');
            });
        }
    }
}

// Inicializar a aplicação quando o documento está pronto
onDOMReady(() => {
    new App();
});
