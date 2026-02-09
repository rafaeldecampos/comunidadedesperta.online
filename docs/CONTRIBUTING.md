# 🚀 Guia de Desenvolvimento

## Primeiros Passos

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/comunidadedesperta.online.git
cd comunidadedesperta.online
```

### 2. Estrutura do Projeto
Todos os arquivos organizados em:
- `src/` - Código-fonte (CSS e JavaScript modularizados)
- `public/` - Assets estáticos (imagens, documentos)
- `docs/` - Documentação

### 3. Abrir no VS Code
```bash
code .
```

---

## 📝 Trabalhando com CSS

### Adicionar Novos Estilos

**Para componentes:**
```css
/* src/css/components.css */
.novo-componente {
    padding: var(--radius);
    background: var(--card);
    border: 1px solid var(--border);
}
```

**Para seções:**
```css
/* src/css/sections.css */
#nova-secao {
    padding: 4rem 1.5rem;
}
```

**Para responsividade:**
```css
/* src/css/responsive.css */
@media (max-width: 768px) {
    .novo-componente {
        padding: var(--radius) / 2;
    }
}
```

### Usar Variáveis CSS
```css
/* ✅ Correto */
color: var(--primary);
background: var(--muted);

/* ❌ Evitar */
color: #d4805a;
background: #ede8e0;
```

---

## 🚀 Trabalhando com JavaScript

### Estrutura de Módulos

```javascript
// src/js/meu-modulo.js

/**
 * @class MinhaClasse
 * @description Descrição do que faz
 */
export class MinhaClasse {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
        this.estado = {};
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.elemento?.addEventListener('click', () => this.metodo());
    }

    metodo() {
        // implementação
    }
}
```

### Importar em main.js

```javascript
// src/js/main.js

import { MinhaClasse } from './meu-modulo.js';

class App {
    init() {
        const instancia = new MinhaClasse('.seletor');
        instancia.init();
    }
}
```

### Boas Práticas

✅ Use arrow functions para manter `this`
✅ Adicione JSDoc comments
✅ Valide seletores antes de usar
✅ Use nomes descritivos
✅ Separe lógica em métodos pequenos

```javascript
// ✅ Bom
init() {
    this.setupEventListeners();
    this.initializeState();
}

// ❌ Ruim
init() {
    // código muito longo aqui
}
```

---

## 📱 Responsividade

### Breakpoints
```css
/* Desktop: sem media query / mobile-first */
/* 768px e abaixo: tablet */
@media (max-width: 768px) { }

/* 480px e abaixo: mobile pequeno */
@media (max-width: 480px) { }
```

### Testar Responsividade
1. Abra DevTools (F12)
2. Click no ícone de device (Ctrl+Shift+M)
3. Teste em diferentes tamanhos

---

## 🔄 Git Workflow

### Branch para Nova Feature
```bash
git checkout -b feature/nome-descritivo
```

### Commit com Mensagem Clara
```bash
git commit -m "feat: adiciona nova seção"
git commit -m "fix: corrige bug no slider"
git commit -m "style: reorganiza CSS"
```

### Tipos de Commit
- `feat:` Nova feature
- `fix:` Correção de bug
- `style:` Formatação, sem lógica
- `refactor:` Reescrever código
- `docs:` Documentação
- `perf:` Performance

---

## 🧪 Validação

### Validar HTML
- Usar W3C Validator: https://validator.w3.org/

### Validar CSS
- Usar W3C CSS Validator: https://jigsaw.w3.org/css-validator/

### Validar JavaScript
- Usar ESLint (adicionar no futuro)

### Testar Compatibilidade
- Chrome, Firefox, Safari, Edge
- iOS e Android

---

## 🐛 Debugging

### Console do Browser
```javascript
console.log('valor:', valor);
console.error('Erro:', erro);
console.warn('Aviso:', aviso);
```

### Breakpoints no DevTools
1. Abra DevTools (F12)
2. Sources tab
3. Clique no número da linha
4. Execute e inspect

---

## 🚀 Deployment

### Para Staging
```bash
git push origin feature/nome -u
# Fazer Pull Request no GitHub
```

### Para Produção
```bash
# Testar localmente
npm run build  # (quando implementar build tool)

# Push para main
git merge feature/nome
git push origin main
```

---

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [CSS Tricks](https://css-tricks.com/)
- [Lucide Icons](https://lucide.dev/)

---

## ❓ FAQ

**P: Como adicionar uma nova página?**
R: Criar novo arquivo `.html` e referenciar os mesmos CSS/JS

**P: Como mudar cores?**
R: Edite as variáveis em `src/css/base.css` (`:root`)

**P: Como adicionar imagens?**
R: Coloque em `public/images/` e referencie como `images/nome.jpg`

**P: Qual é o navegador mínimo suportado?**
R: Chrome 50+, Firefox 45+, Safari 9+, Edge 12+

---

**Última Atualização**: Fevereiro 2026
