# Agenda Particular com Autenticação Firebase

Este repositório contém o código-fonte de uma aplicação web para uma Agenda Particular, com autenticação utilizando o Firebase. A aplicação permite aos usuários autenticados realizar o cadastro e listagem de tarefas pessoais.

## Funcionalidades

- **Autenticação com Firebase:**
  - Faça login para acessar a agenda particular.
  - Use e-mail e senha para autenticação.
  - Usuário de teste disponível: testeapp@gmail.com - 123456.

- **Cadastro de Tarefas:**
  - Insira uma descrição para a tarefa.
  - Escolha a data e hora para a execução da tarefa.

- **Listagem de Tarefas:**
  - Visualize todas as tarefas cadastradas.
  - As tarefas são exibidas com sua descrição, data e hora.

- **Logout:**
  - Encerre a sessão para sair da agenda.

## Estrutura do Projeto

- **HTML:** Contém a estrutura principal da aplicação, formulários de login e cadastro de tarefas.
- **CSS (style.css):** Estilização da interface para os modos de login e logado.
- **JavaScript (scrypt.js):** Lógica de interação do usuário, autenticação Firebase e manipulação do banco de dados Firestore.
- **Firebase (firebase-app-compat.js, firebase-auth-compat.js, firebase-firestore-compat.js):** Bibliotecas do Firebase para autenticação e banco de dados.

## Como Executar

1. Clone este repositório para o seu ambiente local.
2. Configure um projeto no [Firebase Console](https://console.firebase.google.com/) e obtenha as credenciais do Firebase (apiKey, authDomain, projectId, etc.).
3. Substitua as informações de configuração no arquivo `scrypt.js` com as credenciais obtidas.
4. Abra o arquivo `index.html` em um navegador web.

## Notas Adicionais

- Utiliza o [Firebase Authentication](https://firebase.google.com/docs/auth) para autenticação de usuários.
- Utiliza o [Firebase Firestore](https://firebase.google.com/docs/firestore) para armazenar as tarefas dos usuários.

Sinta-se à vontade para contribuir, reportar problemas ou sugerir melhorias. Obrigado por utilizar a Agenda Particular com Autenticação Firebase!


[Acessar pagina](https://igorxrs.github.io/Agenda-com-auth/)

