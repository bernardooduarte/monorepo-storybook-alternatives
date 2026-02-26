# monorepo-storybook-alternatives

Monorepo (React + Vue) para avaliar **alternativas ao Storybook** com foco em:

- ♻️ Reaproveitamento de componentes (bibliotecas compartilhadas)
- 🧪 Vitrines/component explorers diferentes consumindo os mesmos componentes
- 🧱 Monorepo com **pnpm workspaces** + orquestração com **Turborepo**
- 🚀 **Deploy unificado**: um **Portal** agregando os builds estáticos em `/tools/<tool>/`

---

## ✨ Estrutura do repositório

### Apps (`/apps`)
- **portal**: agregador principal publicado no Vercel
- **ladle-react**: vitrine React com Ladle
- **histoire-vue**: vitrine Vue com Histoire
- **docs-docusaurus**: documentação centralizada
- **styleguidist-react**: vitrine React com Styleguidist *(opcional)*
- **playroom-react**: playground React com Playroom *(opcional)*

### Packages (`/packages`)
- **ui-tokens**: design tokens compartilhados (TypeScript + CSS variables)
- **ui-react**: componentes React
- **ui-vue**: componentes Vue
- **tsconfig** *(opcional)*: configuração TypeScript compartilhada
- **eslint-config** *(opcional)*: ESLint compartilhado

---

## 🚀 Quick Start

**Pré-requisitos**: Node.js (LTS) e pnpm

```bash
# Instalar dependências
pnpm install

# Rodar tudo em paralelo
pnpm dev

# Ou rodar apps individualmente
pnpm -C apps/ladle-react dev
pnpm -C apps/histoire-vue dev
```

---

## 🏗️ Build & Deploy

```bash
# Build geral
pnpm build

# Build para Portal (copia outputs para /public/tools/<tool>/)
pnpm build:vercel

# Rodar Portal localmente
pnpm -C apps/portal dev
```

**Rotas esperadas no Portal**:
- `/tools/ladle/`
- `/tools/histoire/`
- `/tools/docs/`

---

## ⚙️ Convenções

- Tokens (`packages/ui-tokens`) são a fonte de verdade visual
- Importar `@acme/ui-tokens/src/tokens.css` em cada app
- Vitrines consomem libs via workspace: `@acme/ui-react`, `@acme/ui-vue`

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| **Assets quebrados em `/tools/<app>/`** | Configurar `publicPath` ou usar paths relativos |
| **React duplicado ("Invalid hook call")** | Garantir versão única de React nas dependências |

