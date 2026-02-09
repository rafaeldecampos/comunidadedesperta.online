/**
 * @file clipboard.js
 * @description Gerencia cópia da chave PIX para a área de transferência
 */

export class ClipboardManager {
    /**
     * Copia a chave PIX para a área de transferência
     * @param {string} elementId - ID do elemento contendo a chave
     * @param {string} buttonTextElementId - ID do elemento com o texto do botão
     */
    static async copyPixKey(elementId = 'pixKey', buttonTextElementId = 'copyText') {
        const pixKeyElement = document.getElementById(elementId);
        const copyTextElement = document.getElementById(buttonTextElementId);

        if (!pixKeyElement) {
            console.error(`Elemento com ID "${elementId}" não encontrado`);
            return;
        }

        const pixKey = pixKeyElement.textContent;

        try {
            await navigator.clipboard.writeText(pixKey);
            
            if (copyTextElement) {
                const originalText = copyTextElement.textContent;
                copyTextElement.textContent = 'Copiado!';
                
                setTimeout(() => {
                    copyTextElement.textContent = originalText;
                }, 2000);
            }
        } catch (err) {
            console.error('Erro ao copiar chave PIX:', err);
            alert('Erro ao copiar. Tente novamente.');
        }
    }
}
