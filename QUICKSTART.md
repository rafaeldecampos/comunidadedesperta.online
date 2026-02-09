# 🚀 Quick Start - Comece Agora!

## Passo 1: Entender a Estrutura (5 min)

Abra `docs/README.md` para visão geral rápida.

```
docs/
├── README.md           ← Leia primeiro!
├── ARCHITECTURE.md     ← Entenda o design
├── CONTRIBUTING.md     ← Aprenda a contribuir
└── SUMMARY.md          ← Resumo de tudo
```

---

## Passo 2: Explorar o Código (10 min)

### CSS Modularizado
```
src/css/
├── base.css        (variáveis, reset)
├── header.css      (navegação)
├── components.css  (botões, cards)
├── sections.css    (seções)
└── responsive.css  (mobile)
```

**Abra em VS Code e veja como está organizado!**

### JavaScript Modularizado
```
src/js/
├── main.js         (orquestrador)
├── slider.js       (carrossel)
├── navigation.js   (menu)
├── clipboard.js    (copiar)
└── utils.js        (utilidades)
```

---

## Passo 3: Validar em Navegador (5 min)

### Opção A: Usar `index.html.new` (Novo)
```
1. Open index.html.new in browser
2. Testar:
   - Slider de imagens funciona?
   - Menu mobile abre/fecha?
   - Copiar PIX funciona?
   - Scroll suave funciona?
   - Layout responsivo OK?
```

### Opção B: Usar `index.html` atual (Legado)
```
Continua funcionando normalmente com script.js antigo
```

---

## Passo 4: Começar a Desenvolvimento

### Para Modificar CSS
```
1. Abra src/css/[arquivo].css
2. Faça mudanças
3. Salve
4. Refresh no navegador
```

### Para Modificar HTML
```
1. Abra index.html ou index.html.new
2.Faça mudanças
3. Salve
4. Refresh
```

### Para Adicionar Funcionalidade JS
```
1. Crie src/js/meu-modulo.js
2. Exporte a classe:
   export class MeuModulo { }
   
3. Importe em main.js:
   import { MeuModulo } from './meu-modulo.js';
   
4. Instancie em App:
   new MeuModulo('.seletor');
```

---

## Passo 5: Usar Vite (Opcional, Futura)

Quando quiser otimizar para produção:

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Minificar CSS/JS
npm run preview
```

---

## 🎯 Principais Mudanças vs. Anterior

| O que Mudou | Antes | Depois |
|-------------|-------|--------|
| CSS | 1 arquivo (855 linhas) | 5 arquivos modularizados |
| JavaScript | 1 arquivo com funções globais | 5 módulos com classes |
| Estrutura | Raiz desorganizado | `src/` organizado |
| Documentação | Nenhuma | 4 documentos completos |

---

## ⚠️ Importante

### Compatibilidade
- ✅ `index.html` (antiga) continua funcionando
- ✅ `index.html.new` é a versão otimizada
- ✅ Sem breaking changes

### Dúvidas?
1. Leia `docs/README.md#faq`
2. Veja `docs/CONTRIBUTING.md` para exemplos
3. Consulte `docs/ARCHITECTURE.md` para entender estrutura

---

## ✅ Checklist Rápido

- [ ] Li `docs/README.md`
- [ ] Explorei os arquivos em `src/css/`
- [ ] Explorei os arquivos em `src/js/`
- [ ] Testei `index.html.new` em navegador
- [ ] Validei que slider, menu, copiar PIX funcionam
- [ ] Entendi a estrutura de pasta

**Quando todos os ✅ estiverem marcados, você está pronto!**

---

**Bem-vindo ao novo projeto! 🎉**

Qualquer dúvida, leia a documentação ou crie um PR no GitHub.

Boa sorte! 🚀
