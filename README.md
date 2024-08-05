# CRUD MongoDB com Node.js e EJS

Este projeto é uma aplicação web simples para gerenciamento de usuários, utilizando Node.js, Express.js, MongoDB e EJS. O sistema permite a criação, leitura, atualização e exclusão (CRUD) de usuários com informações como nome, idade e email.

## Funcionalidades

- **Cadastro de Usuário:** Permite adicionar um novo usuário com nome, idade e email.
- **Listagem de Usuários:** Exibe todos os usuários cadastrados em uma lista.
- **Remoção de Usuário:** Permite remover um usuário da lista.
- **Edição de Usuário:** Permite atualizar as informações de um usuário existente.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no servidor.
- **Express.js:** Framework para Node.js para criar servidores web e APIs.
- **MongoDB:** Banco de dados NoSQL utilizado para armazenar os dados dos usuários.
- **EJS:** Motor de templates para renderizar páginas HTML com dados dinâmicos.

## Estrutura do Projeto

### Diretórios e Arquivos

- **`/views`**: Contém arquivos EJS para renderização das páginas web.
- **`/routes`**: Contém as definições das rotas da aplicação.
- **`/db.js`**: Contém funções para conectar e interagir com o banco de dados MongoDB.
- **`/app.js`**: Arquivo principal que configura e inicia o servidor Express.

## Configuração do Ambiente

1. **Clone o Repositório**

   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd <NOME_DO_REPOSITÓRIO>

   Instale as Dependências
2-
npm install
Configure as Variáveis de Ambiente


npm start
O servidor estará disponível em http://localhost:3000.

## Detalhes Técnicos

- **Conexão com MongoDB:** Utiliza a biblioteca `mongodb` para se conectar ao banco de dados e realizar operações CRUD. A função `connect` estabelece a conexão com o MongoDB e retorna uma instância do banco de dados. As funções `inserir`, `remover` e `atualizar` interagem com a coleção "customers" para gerenciar os dados dos usuários.

- **Manipulação de Dados:** As funções no arquivo `db.js` lidam com a inserção (`inserir`), remoção (`remover`), atualização (`atualizar`) e leitura (`find`) de dados no MongoDB. A função `atualizar` utiliza o método `updateOne` para modificar os documentos existentes na coleção.

- **Rotas Express:** As rotas no arquivo `routes/index.js` definem as ações para salvar, remover e editar usuários:
  - **POST /salvar:** Recebe os dados do formulário de cadastro e utiliza a função `inserir` para adicionar um novo usuário ao banco de dados.
  - **POST /delete:** Recebe o ID do usuário a ser removido e utiliza a função `remover` para excluir o usuário do banco de dados.
  - **POST /edit:** Recebe o ID do usuário e os novos dados (usuário, idade, email) para atualizar as informações no banco de dados utilizando a função `atualizar`.

- **Templates EJS:** Os arquivos EJS na pasta `views` são utilizados para renderizar a interface do usuário com dados dinâmicos:
  - **index.ejs:** Exibe o formulário de cadastro e a lista de usuários. Permite a remoção e edição de usuários com formulários dedicados dentro da lista de usuários.

## Contribuições

Este projeto foi desenvolvido com base em diversas pesquisas na internet para fortalecer a estrutura e a funcionalidade da aplicação. Agradecimentos às comunidades e tutoriais que ajudaram a melhorar a implementação do banco de dados MongoDB e da aplicação Node.js.

