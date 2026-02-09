/**
 * @file utils.js
 * @description Funções utilitárias globais
 */

/**
 * Inicializa os ícones Lucide
 */
export function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide não foi carregado');
    }
}

/**
 * Aguarda o DOM estar completamente carregado
 * @param {Function} callback - Função a ser executada
 */
export function onDOMReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

/**
 * Adiciona ouvinte de evento com delegação
 * @param {string} selector - Seletor CSS
 * @param {string} event - Nome do evento
 * @param {Function} handler - Função handler
 */
export function delegate(selector, event, handler) {
    document.addEventListener(event, (e) => {
        const target = e.target.closest(selector);
        if (target) handler.call(target, e);
    });
}
