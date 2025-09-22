# Teste SENAI

Este é um projeto desenvolvido como parte do desafio proposto pelo SENAI, com o objetivo de criar uma aplicação web interativa e autoinstrucional. O projeto visa proporcionar uma experiência de aprendizado envolvente e de fácil navegação, utilizando conceitos de front-end e boas práticas de desenvolvimento web.

## Sumário

- Sobre
- Requisitos Técnicos
- Especificações de Design e UX
- Especificações da Aplicação
- Processo Criativo
- Decisões Técnicas
- Uso de IA
- Desafios
- Deploy
- Rodar Localmente

## Sobre

O desafio consiste em criar uma aplicação web para um curso autoinstrucional, com um conteúdo claro, bem estruturado e envolvente. O objetivo é ensinar um conceito de front-end de forma intuitiva para jovens de 16 a 24 anos. O projeto deve ser desenvolvido do zero, com um design minimalista e fácil de usar, utilizando HTML, CSS e JavaScript.

Você pode escolher um dos seguintes temas para a aplicação:
- Como configurar uma conta de e-mail profissional
- Como criar uma playlist temática no Spotify

## Requisitos Técnicos

- **HTML Semântico**: O código HTML deve ser escrito de maneira semântica, utilizando tags apropriadas como `<main>`, `<section>`, `<nav>`, etc.
- **Responsividade**: O layout deve ser responsivo, adaptando-se a diferentes dispositivos (desktop, tablet e mobile).
- **Versionamento**: O projeto deve estar versionado em um repositório público no Git.
- **Hospedagem**: O projeto deve ser hospedado em uma plataforma pública como GitHub Pages, Vercel ou Netlify.
- **Arquitetura**: O projeto deve conter múltiplas páginas, demonstrando roteamento ou navegação entre seções. Pode ser utilizado React.
  
## Especificações de Design e UX

A aplicação deve seguir as seguintes diretrizes de design:
- **Paleta de Cores**:
  - Cor Primária: `#1E3A8A` (Azul Marinho)
  - Cor de Destaque: `#34D399` (Verde Esmeralda)
  - Cor Secundária (Texto): `#D1D5DB` (Cinza Claro)
  
- O design deve ser minimalista e com foco em alta legibilidade. As cores devem ser contrastantes para guiar intuitivamente o usuário.

## Especificações da Aplicação

A aplicação inclui três tipos de exercícios:
1. **Escolha Única**: Pergunta com múltiplas opções, onde apenas uma está correta.
2. **Múltipla Escolha**: Pergunta com várias opções, onde uma ou mais podem estar corretas.
3. **Combobox**: Pergunta com um menu suspenso.

### Funcionalidade:
- Cada exercício deve permitir um máximo de 3 tentativas.
- O feedback deve ser exibido após cada tentativa, informando se a resposta foi correta ou incorreta.
- O progresso do usuário deve ser salvo no navegador (persistência de dados).

## Processo Criativo

1. **Configuração do ambiente**: Configuração do projeto com as ferramentas necessárias.
2. **Mockup e Planejamento**: Criação de mockups em papel para entender o fluxo da aplicação.
3. **Desenvolvimento de conteúdo**: Criação e estruturação do conteúdo.
4. **Desenvolvimento da página**: Implementação da página e estilização.
5. **Testes**: Testes em diferentes dispositivos para garantir a responsividade.

## Decisões Técnicas

- **React Router**: Utilizado para gestão de rotas da aplicação.
- **Bootstrap**: Usado para a criação de componentes e maior responsividade.
- **MUI (Material-UI)**: Utilizado para alguns componentes de interface.
- **Photoscape X**: Ferramenta utilizada para otimização de imagens e conversão para o formato WebP.

## Uso de IA

O ChatGPT foi utilizado para:
- Gerar conteúdo textual (exemplo: descrições, feedbacks e instruções).
- Ajudar a otimizar o código e converter HTML para Markdown.
- Buscar sugestões de melhorias e soluções mais dinâmicas para implementar funcionalidades.

## Desafios

- **Roteamento**: Implementar o roteamento com o React Router foi desafiador, mas foi possível aprender a partir da documentação e tutoriais.
- **Uso do MUI**: Foi a primeira vez utilizando o MUI, o que envolveu aprender e adaptar a biblioteca para o design proposto.

## Deploy

O projeto está hospedado na Vercel e pode ser acessado através do seguinte link:

[https://teste-senai-4551.vercel.app/](https://teste-senai-4551.vercel.app/)

## Rodar Localmente

### Pré-requisitos

- **Git** instalado e configurado
- **Node.js** instalado e configurado
- **NPM** instalado e configurado

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/A-Marvulle/teste-senai.git

2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/teste-senai.git

3. Abra o projeto:
   ```bash
   cd teste-senai

4. Instale as Dependencias:
   ```bash
   npm install

5. Rode o projeto:
   ```bash
   npm run dev

Ele vera abrir em http://localhost:5173/