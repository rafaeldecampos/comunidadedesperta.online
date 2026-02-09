/**
 * @file slider.js
 * @description Gerencia o carrossel de imagens na seção "Quem Somos"
 */

export class ImageSlider {
    constructor(imageSelector = '.about-image img', dotSelector = '.slider-dot') {
        this.slides = document.querySelectorAll(imageSelector);
        this.dots = document.querySelectorAll(dotSelector);
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.slideInterval = null;
        this.slideIntervalTime = 5000; // 5 segundos
        
        if (this.totalSlides > 0) {
            this.init();
        }
    }

    init() {
        this.showSlide(0);
        this.startAutoSlide();
    }

    /**
     * Exibe um slide específico
     * @param {number} index - Índice do slide
     */
    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            this.dots[i]?.classList.remove('active');
        });
        
        this.slides[index].classList.add('active');
        this.dots[index]?.classList.add('active');
    }

    /**
     * Muda para o próximo slide
     */
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }

    /**
     * Muda para um slide específico (chamado pelos dots)
     * @param {number} index - Índice do slide
     */
    changeSlide(index) {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
        this.resetAutoSlide();
    }

    /**
     * Inicia o carrossel automático
     */
    startAutoSlide() {
        this.slideInterval = setInterval(() => this.nextSlide(), this.slideIntervalTime);
    }

    /**
     * Para o carrossel automático
     */
    stopAutoSlide() {
        clearInterval(this.slideInterval);
    }

    /**
     * Reseta o carrossel automático
     */
    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}
