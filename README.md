
# Automação de Testes — Automation Test Store

## 1. Sobre o projeto

Projeto de automação de testes de interface (UI) e ponta a ponta (E2E), desenvolvido com Cypress, utilizando a aplicação Automation Test Store.

O objetivo é validar funcionalidades de navegação, busca, catálogo de produtos, carrinho de compras e responsividade.

## 2. Tecnologias utilizadas

- Node.js
- JavaScript
- Cypress 16.3.0
- Automation Test Store

## 3. Pré-requisitos

- Node.js instalado
- npm instalado

## 4. Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd automation-test-store
```

Instale as dependências:

```bash
npm install
```

## 5. Execução dos testes

Para executar todos os testes em modo headless:

```bash
npm test
```

Para abrir a interface do Cypress:

```bash
npx cypress open
```

## 6. Casos de teste automatizados

O projeto contém 16 casos de teste:

| Identificação | Funcionalidade |
|---|---|
| CT-01 a CT-07 | Navegação e produtos |
| CT-08 a CT-11 | Busca e catálogo |
| CT-12 a CT-14 | Carrinho e quantidade |
| CT-15 e CT-16 | Responsividade |

## 7. Resultado da execução

Última execução validada:

- Total de testes: 16
- Aprovados: 16
- Reprovados: 0
- Pendentes: 0

## 8. Estrutura do projeto

```text
automation-test-store/
├── cypress/
│   └── e2e/
│       └── navigation.cy.js
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
