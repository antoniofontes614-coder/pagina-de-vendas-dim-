# Página de Vendas Oficial — DIM+

Página de vendas moderna, profissional e de alta conversão para o aplicativo **DIM+**, com foco em conversão e alinhada à identidade visual da plataforma.

---

## 🎨 Identidade Visual & Design System

- **Cores principais**: Preto profundo (`#050806`), tons obsidian e verde esmeralda profundo (`#08120d`, `#064E3B`).
- **Destaques e Acentos**: Verde Neon (`#00E676`) e Esmeralda (`#10B981`, `#059669`).
- **Efeitos**: Glassmorphism com desfoque de fundo (`backdrop-blur`), iluminação radial ambiente, botões com efeito shimmer e pulso neon.
- **Tipografia**: *Plus Jakarta Sans* (a mesma do aplicativo DIM+).
- **Mockup**: Reprodução fiel das telas e recursos reais do aplicativo (Saldo Consolidado, Botões de Receita/Despesa, Minhas Contas, Distribuição de Gastos e Metas).

---

## 🚀 Como Integrar seu Checkout da Cakto

Para conectar seu link de pagamento da Cakto:

1. Abra o arquivo **`config.js`**.
2. Substitua a URL na linha indicada:
   ```javascript
   const CAKTO_CHECKOUT_URL = "https://pay.cakto.com.br/SEU_LINK_AQUI";
   ```
3. Salve o arquivo. Automaticamente todos os botões **"QUERO ACESSAR O DIM+"** da página direcionarão o cliente para o seu checkout da Cakto!

---

## 📂 Estrutura de Arquivos

- `index.html` — Estrutura completa da página de vendas (Hero, Benefícios, Experiência Real e Chamada Final).
- `styles.css` — Estilos customizados, efeitos neon, auras de iluminação, animações e moldura premium de celular.
- `script.js` — Lógica dos botões de checkout, alternador interativo de telas na Seção 3 e animações suaves de scroll.
- `config.js` — Configuração centralizada e de fácil edição do link de checkout Cakto.
- `dim-logo.png` — Logotipo oficial de alta resolução do DIM+.

---

## 💻 Como Visualizar Localmente

Basta abrir o arquivo `index.html` com qualquer navegador (Google Chrome, Edge, etc.) ou utilizar uma extensão como o Live Server do VS Code.
