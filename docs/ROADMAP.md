# 🗺️ Roadmap Visual - Estrutura do Projeto

```
COMUNIDADE DESPERTA
│
├─ 📁 ROOT (Raiz)
│  ├─ index.html                (Versão atual)
│  ├─ index.html.new            (✨ NOVO - Otimizado)
│  ├─ styles.css                (Legado)
│  ├─ script.js                 (Legado)
│  ├─ QUICKSTART.md             (✨ Guia Rápido)
│  ├─ CHANGELOG.md              (✨ Histórico de Mudanças)
│  ├─ package.json              (✨ Dependências)
│  ├─ vite.config.js            (✨ Build Config)
│  ├─ .eslintrc.json            (✨ Linting)
│  ├─ .prettierrc.json          (✨ Formatação)
│  └─ .gitignore                (✨ Git Config)
│
├─ 📁 src/ (✨ NOVO - Código-fonte)
│  │
│  ├─ 🎨 css/
│  │  ├─ base.css               (Temas, animações, reset)
│  │  ├─ header.css             (Nav, menus, logo)
│  │  ├─ components.css         (Botões, cards, dividers)
│  │  ├─ sections.css           (Hero, about, schedule, etc)
│  │  └─ responsive.css         (Media queries)
│  │
│  ├─ 📜 js/
│  │  ├─ main.js                (Orquestrador)
│  │  ├─ slider.js              (ImageSlider class)
│  │  ├─ navigation.js          (Navigation class)
│  │  ├─ clipboard.js           (ClipboardManager class)
│  │  └─ utils.js               (Funções globais)
│  │
│  └─ 📦 assets/                (Para futuro uso)
│     ├─ fonts/                 (Tipografias)
│     ├─ icons/                 (Ícones customizados)
│     └─ images/                (Imagens otimizadas)
│
├─ 📁 public/ (✨ NOVO - Assets Estáticos)
│  ├─ images/                   (Imagens do site)
│  └─ documents/                (PDFs, documentos)
│
├─ 📁 docs/ (✨ NOVO - Documentação)
│  ├─ README.md                 (Índice de docs)
│  ├─ ARCHITECTURE.md           (Design da arquitetura)
│  ├─ CONTRIBUTING.md           (Guia de contribuição)
│  └─ SUMMARY.md                (Resumo das mudanças)
│
└─ 📁 .git/                     (Git repository)
   └─ (histórico de commits)
```

---

## 📊 Mapa de Dependências

```
HTML (index.html)
    │
    ├─→ 🎨 CSS
    │   ├─→ src/css/base.css
    │   ├─→ src/css/header.css
    │   ├─→ src/css/components.css
    │   ├─→ src/css/sections.css
    │   └─→ src/css/responsive.css
    │
    ├─→ 📜 JavaScript
    │   ├─→ Lucide Icons (library)
    │   └─→ Inline Scripts (compatibilidade)
    │
    └─→ 🖼️ Assets
        ├─→ images/
        ├─→ documents/
        └─→ favicon.ico
```

---

## 🔀 Fluxo de Inicialização

```
1. Browser carrega index.html
   ↓
2. Carrega Meta Tags (SEO, OG)
   ↓
3. Carrega Fonts (Google Fonts)
   ↓
4. Carrega CSS (5 arquivos modularizados)
   ├─ base.css       (variáveis)
   ├─ header.css     (navegação)
   ├─ components.css (componentes)
   ├─ sections.css   (seções)
   └─ responsive.css (mobile)
   ↓
5. Carrega Lucide Icons (library)
   ↓
6. Parseia HTML e monta DOM
   ↓
7. Executa Scripts Inline
   ├─ Inicializa Lucide
   ├─ Setup menu mobile
   ├─ Setup slider
   ├─ Setup scroll
   └─ Setup contato
   ↓
8. ✅ Site está pronto!
```

---

## 📈 Schema da Organização CSS

```
base.css (ROOT)
├─ Variáveis CSS
│  ├─ Cores      (--primary, --background, etc)
│  ├─ Espaçamento (--radius, --gap, etc)
│  └─ Tipografia (--font-primary, --font-secondary)
│
├─ Reset Global
│  ├─ box-sizing
│  ├─ HTML/Body
│  └─ Elementos
│
└─ Animações Globais
   ├─ @keyframes fadeIn
   └─ @keyframes bounce

↓ (Herdam do base)

header.css
├─ <header>
├─ <nav>
├─ .logo
├─ .nav-links
├─ .mobile-menu
└─ .mobile-menu-overlay

↓ (Herdam do base)

components.css
├─ .btn, .btn-copy
├─ .card, .cards-grid
├─ .quote
├─ .divider
└─ .info-box

↓ (Herdam do base)

sections.css
├─ .hero
├─ #about
├─ #schedule
├─ #contribute
├─ #contact
└─ <footer>

↓ (Sobrescreve para mobile)

responsive.css
├─ @media (max-width: 768px)
└─ @media (max-width: 480px)
```

---

## 🚀 Schema da Organização JavaScript

```
main.js (ORQUESTRADOR)
│
├─→ importa('./slider.js')
│   └─ class ImageSlider { }
│
├─→ importa('./navigation.js')
│   └─ class Navigation { }
│
├─→ importa('./clipboard.js')
│   └─ class ClipboardManager { }
│
├─→ importa('./utils.js')
│   ├─ initLucideIcons()
│   ├─ onDOMReady()
│   └─ delegate()
│
└─→ class App
    ├─ constructor()
    ├─ init()
    ├─ initializeModules()  (instancia slider, nav, etc)
    └─ setupEventListeners()

    ↓ (App instancia)

    new App() ← Executa quando DOM está pronto
```

---

## 🎯 Padrões de Projeto Utilizados

```
Site
│
├─ 🔷 MODULAR PATTERN
│  └─ Cada arquivo = 1 responsabilidade
│
├─ 🔶 CLASS PATTERN
│  └─ Usar classes ES6 para encapsular
│
├─ 🔸 SINGLETON PATTERN
│  └─ Uma instância lógica por módulo
│
└─ 🔹 OBSERVER PATTERN
   └─ Event listeners para reatividade
```

---

## 📊 Fluxo de Mudanças

```
ANTES                          DEPOIS
(Arquivo único, monolítico)   (Modularizado, escalável)

styles.css (855 linhas)       src/css/ (5 arquivos)
│                             ├─ base.css
├─ Reset                      ├─ header.css
├─ Navigation                 ├─ components.css
├─ Hero                       ├─ sections.css
├─ Components                 └─ responsive.css
├─ Sections
├─ Media queries
└─ ... tudo junto

script.js (100 linhas)        src/js/ (5 módulos)
│                             ├─ main.js
├─ Slider                     ├─ slider.js
├─ Navigation                 ├─ navigation.js
├─ Clipboard                  ├─ clipboard.js
└─ Utils                      └─ utils.js
```

---

## 🔄 Ciclo de Desenvolvimento

```
1. ENTENDER
   ↓
   Ler docs/ARCHITECTURE.md

2. CRIAR
   ↓
   Criar novo arquivo em src/

3. TESTAR
   ↓
   Abrir no navegador, validar

4. DOCUMENTAR
   ↓
   Atualizar comentários e docs

5. COMMIT
   ↓
   git commit -m "feat: descrição"

6. REPETIR
   ↓
   Próxima feature...
```

---

## 🎓 Estrutura de Aprendizado

```
Para iniciantes:
1. QUICKSTART.md (5 minutos)
2. docs/README.md (10 minutos)
3. Explorar src/ (manual)
4. Fazer mudança pequena (teste)

Para intermediários:
1. docs/ARCHITECTURE.md (30 minutos)
2. docs/CONTRIBUTING.md (20 minutos)
3. Adicionar nova seção prática

Para avançados:
1. Implementar nova feature
2. Configurar Vite
3. Adicionar testes
4. Otimizar performance
```

---

## ✨ Características por Módulo

```
🎨 CSS Modularizado
├─ Variáveis CSS centralizadas
├─ BEM-like naming
├─ Mobile-first approach
└─ 100% reutilizável

📜 JavaScript Modularizado
├─ Classes ES6
├─ Métodos bem definidos
├─ Sem dependências globais
└─ Fácil testar

📚 Documentação Completa
├─ Arquitetura explicada
├─ Padrões de projeto
├─ Exemplos práticos
└─ FAQ respondido

🔧 Configuração Moderna
├─ package.json
├─ vite.config.js  
├─ .eslintrc.json
└─ .prettierrc.json
```

---

## 🎉 Conclusão Visual

```
    ESTRUTURA
       ↓
  MODULARIZAÇÃO
       ↓
  MANUTENIBILIDADE
       ↓
  ESCALABILIDADE
       ↓
✅ QUALIDADE SUPERIOR
```

---

**Este mapa deve ajudar você a visualizar:**
- Onde cada arquivo está
- Como os arquivos se relacionam
- Qual é o fluxo de funcionamento
- Como adicionar coisas novas

Imprima ou salve para referência! 📌
