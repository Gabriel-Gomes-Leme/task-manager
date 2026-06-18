# Task Manager

Um projeto desenvolvido como parte de um teste técnico para Desenvolvedor Front-end Júnior.

A aplicação consiste em um gerenciador de tarefas com autenticação simulada, permitindo criar, editar, concluir e remover tarefas através de uma interface simples.

## Tecnologias

* React
* TypeScript
* React Router DOM
* Tailwind CSS
* Context API
* useReducer
* React Toastify

## Funcionalidades

### Login

* Validação no cliente de e-mail e senha
* Feedback visual para erros e sucesso
* Redirecionamento após autenticação

### Tarefas

* Listagem de tarefas
* Criação de novas tarefas
* Edição de tarefas
* Exclusão de tarefas
* Marcação de tarefas como concluídas
* Filtros por status (Todas, Pendentes e Concluídas)

### Persistência

* As tarefas são salvas no LocalStorage para permanecerem disponíveis após atualizar a página.

## Dados Mockados

Como o teste não exigia a implementação do back-end, foram utilizados dados mockados para simular as respostas da API.

Usuário para teste:

* E-mail: user@example.com.br
* Senha: user123

## Executando o projeto

Instale as dependências:

```bash
npm install
```
Execute a aplicação:
```bash
npm run dev
```
A aplicação ficará disponível em:
http://localhost:5173

## Observações

O projeto teve foco em componentização, gerenciamento de estado com Context API e useReducer e construção de uma interface responsiva utilizando Tailwind CSS.
