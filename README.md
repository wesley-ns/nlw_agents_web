# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da RocketSeat, focado em criar uma aplicação web moderna com React e TypeScript.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento da aplicação
- **TanStack Query** - Gerenciamento de estado e cache de dados

### Styling & UI
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Utilitário para variantes de componentes
- **Tailwind Merge** - Merge inteligente de classes CSS

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter
- **Ultracite** - Otimização de build

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
│   └── ui/        # Componentes de UI (shadcn/ui)
├── pages/         # Páginas da aplicação
├── lib/           # Utilitários e configurações
└── main.tsx       # Ponto de entrada da aplicação
```

## 🛠️ Configuração e Setup

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nlw_agents_web
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3334`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🎨 Padrões de Projeto

- **Componentes**: Utiliza shadcn/ui para componentes base
- **Roteamento**: React Router DOM para navegação
- **Estado**: TanStack Query para gerenciamento de dados
- **Styling**: Tailwind CSS com design system consistente
- **TypeScript**: Tipagem estática em todo o projeto
- **Linting**: Biome para formatação e linting

## 📝 Licença

Este projeto foi desenvolvido durante o evento NLW da RocketSeat.