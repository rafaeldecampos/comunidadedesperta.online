# 📐 Arquitetura do Projeto - Comunidade Desperta

## Visão Geral

O projeto foi reestruturado seguindo as **melhores práticas de arquitetura web**, com organização modular e separação clara de responsabilidades.

---

## 📁 Estrutura de Pastas

```
comunidadedesperta.online/
├── src/                           # 🔧 Código-fonte
│   ├── css/                       # Estilos modularizados
│   │   ├── base.css              # Reset, variáveis CSS, animações globais
│   │   ├── header.css            # Navegação e menu
│   │   ├── components.css        # Botões, cards, elementos reutilizáveis
│   │   ├── sections.css          # Estilos das seções (hero, about, etc)
│   │   └── responsive.css        # Media queries e responsividade
│   │
│   ├── js/                        # Módulos JavaScript (ES6)
│   │   ├── main.js               # Ponto de entrada, inicialização da app
│   │   ├── slider.js             # Classe: Carrossel de imagens
│   │   ├── navigation.js         # Classe: Navegação e menu mobile
│   │   ├── clipboard.js          # Classe: Cópia para clipboard
│   │   └── utils.js              # Funções utilitárias globais
│   │
│   └── assets/                    # (Futuro) Arquivos estáticos processados
│       ├── fonts/
│       ├── icons/
│       └── images/
│
├── public/                        # 📊 Arquivos estáticos (servidos diretamente)
│   ├── images/                   # Imagens do site
│   ├── documents/                # PDFs e documentos
│   └── favicon.ico
│
├── docs/                          # 📚 Documentação
│   ├── ARCHITECTURE.md            # ← Você está aqui
│   └── CONTRIBUTING.md            # Guia de contribuição
│
├── index.html                     # ✨ Versão com compatibilidade
├── index.html.new                 # 🆕 Nova versão (otimizada)
├── styles.css                     # (Legado) - remover após validar novo
├── script.js                      # (Legado) - remover após validar novo
│
├── .gitignore
├── README.md
├── SECURITY.md
├── robots.txt
├── sitemap.xml
└── CNAME
```

---

## 🎨 Estratégia CSS

### Abordagem Modular

Os estilos foram divididos em **módulos temáticos**, facilitando manutenção e escalabilidade:

| Arquivo | Responsabilidade |
|---------|-----------------|
| `base.css` | Variáveis CSS (--primary, --background, etc), reset global, tipografia, animações |
| `header.css` | Navegação fixa, logo, menu desktop e mobile |
| `components.css` | Componentes reutilizáveis (botões, cards, dividers, quotes) |
| `sections.css` | Estilos de seções principais (hero, about, schedule, contribute, contact) |
| `responsive.css` | Media queries para mobile, tablet e desktop |

### Variáveis CSS (CSS Custom Properties)

```css
:root {
    /* Cores */
    --primary: hsl(25, 60%, 45%);           /* Laranja principal */
    --background: hsl(0, 0%, 98%);          /* Fundo claro */
    --foreground: hsl(25, 15%, 25%);        /* Texto escuro */
    
    /* Espaçamento */
    --radius: 0.75rem;                      /* Border-radius padrão */
    
    /* Tipografia */
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Inter', sans-serif;
}
```

**Benefícios:**
- Fácil ajuste de cores e espaçamento
- Consistência visual
- Menos código duplicado

---

## 🚀 Estratégia JavaScript

### Arquitetura Modular (ES6 Modules)

Os scripts foram organizados em **módulos independentes** e reutilizáveis:

```
src/js/
├── main.js           (Orquestrador)
├── slider.js         (Carrossel)
├── navigation.js     (Menu e scroll)
├── clipboard.js      (Clipboard)
└── utils.js          (Utilitários)
```

### Classes e Responsabilidades

#### 1. **`slider.js` - `ImageSlider`**
Gerencia o carrossel de imagens.

```javascript
const slider = new ImageSlider('.about-image img', '.slider-dot');
slider.changeSlide(0);      // Muda para slide 0
slider.resetAutoSlide();     // Reseta o auto-play
```

#### 2. **`navigation.js` - `Navigation`**
Controla navegação, menu mobile e scroll suave.

```javascript
const nav = new Navigation();
nav.scrollToSection(event, 'about');  // Scroll suave
nav.toggleMobileMenu();               // Ativa/desativa menu
nav.closeMobileMenu();                // Fecha menu
```

#### 3. **`clipboard.js` - `ClipboardManager`**
Copia dados para clipboard (estática).

```javascript
ClipboardManager.copyPixKey('pixKey', 'copyText');
```

#### 4. **`utils.js` - Funções Utilitárias**
Funções globais reutilizáveis.

```javascript
initLucideIcons();           // Inicializa ícones
onDOMReady(callback);        // Callback quando DOM está pronto
delegate(selector, event, handler);  // Delegação de eventos
```

#### 5. **`main.js` - Orquestrador**
Inicializa todos os módulos e configura event listeners.

```javascript
new App(); // Instancia e inicia tudo
```

---

## 🔄 Fluxo de Inicialização

```
1. browser carrega index.html
   ↓
2. Carrega CSS:
   - base.css → variáveis e reset
   - header.css, components.css, sections.css, responsive.css
   ↓
3. Carrega scripts inline (compatibilidade)
   ↓
4. (Futuro) Carrega src/js/main.js como módulo ES6
   ↓
5. App() instancia:
   - ImageSlider
   - Navigation
   - Setup de event listeners
   ↓
6. Site está pronto e funcional
```

---

## 📊 Padrões de Projeto Utilizados

### 1. **Modular Pattern**
Cada funcionalidade está em seu próprio módulo.

### 2. **Class Pattern**
Uso de classes ES6 para encapsular estado e comportamento.

### 3. **Singleton/Registry Pattern**
`Navigation` e `ImageSlider` são instâncias únicas coordenadas em `App`.

### 4. **Observer Pattern**
Event listeners para reatividade (click, scroll, etc).

---

## 🎯 Princípios Aplicados

### ✅ **SOLID**
- **S**ingle Responsibility: Cada módulo tem uma responsabilidade
- **O**pen/Closed: Fácil estender sem modificar código existente
- **L**iskov Substitution: Métodos seguem contratos esperados
- **I**nterface Segregation: Interfaces específicas
- **D**ependency Inversion: Dependências injetadas

### ✅ **DRY (Don't Repeat Yourself)**
- Classes reutilizáveis
- Variáveis CSS centralizadas
- Componentes CSS genéricos

### ✅ **KISS (Keep It Simple, Stupid)**
- Código limpo e legível
- Sem sobre-engenharia
- Apenas o necessário

---

## 🔀 Como Usar

### Versão Legada (Compatível)
```html
<!-- Usa arquivo único script.js -->
<script src="script.js"></script>
```

### Versão Modular (Futura)
```html
<!-- Ativar em index.html quando estiver pronto -->
<script type="module" src="src/js/main.js"></script>
```

---

## 🔧 Como Adicionar Novas Funcionalidades

### Exemplo: Adicionar formulário de contato

1. **Criar módulo** `src/js/contact-form.js`:
```javascript
export class ContactForm {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(event) {
        // Implementar lógica
    }
}
```

2. **Importar em `main.js`**:
```javascript
import { ContactForm } from './contact-form.js';

// Na inicialização:
const form = new ContactForm('#contact-form');
```

3. **Adicionar CSS** em `src/css/components.css` ou novo `src/css/form.css`:
```css
.form-group {
    margin-bottom: 1.5rem;
}
/* ... */
```

---

## 📈 Roadmap de Otimizações

- [ ] Implementar Vite como bundler
- [ ] Minificar CSS e JS em produção
- [ ] Lazy loading de imagens
- [ ] Service Worker para PWA
- [ ] Testes unitários (Jest)
- [ ] Integração com Analytics avançada
- [ ] Dark mode com CSS variables

---

## 🛠️ Ferramentas Recomendadas

- **VS Code Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - CSS Modules
  - Prettier
  - ESLint

- **Build Tools**:
  - Vite (leve e rápido)
  - Webpack (mais robusto)

- **Testing**:
  - Jest
  - Vitest

---

## 📝 Conclusão

Esta arquitetura garante:

✅ **Manutenibilidade**: Código organizado e fácil de entender
✅ **Escalabilidade**: Simples adicionar novos módulos
✅ **Performance**: CSS modularizado, JS otimizado
✅ **Reutilização**: Componentes e funções reutilizáveis
✅ **Compatibilidade**: Funciona em navegadores antigos

---

**Versão**: 1.0  
**Última Atualização**: Fevereiro 2026  
**Mantido por**: Comunidade Desperta
