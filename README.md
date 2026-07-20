# 📦 Inventory API

API REST desenvolvida em **Node.js**, **Express**, **TypeScript**, **TypeORM** e **PostgreSQL** para gerenciamento de produtos em estoque.

Este projeto foi desenvolvido como parte das atividades práticas do **Curso Técnico em Desenvolvimento de Sistemas**, com o objetivo de aplicar conceitos de desenvolvimento Back-end, arquitetura em camadas, persistência de dados e boas práticas na construção de APIs REST.

---

# 🎯 Objetivo

Desenvolver uma API para gerenciamento de produtos em estoque, permitindo operações de cadastro, consulta, atualização e exclusão de registros de forma segura e organizada.

Além da implementação das operações CRUD, o projeto demonstra a utilização de validação de dados, tratamento centralizado de erros e integração com banco de dados relacional.

---

# 💼 Valor para o negócio

Embora tenha sido desenvolvido em contexto acadêmico, a estrutura desta aplicação pode servir como base para sistemas corporativos como:

* Sistemas ERP
* Controle de Estoque
* Gestão de Almoxarifado
* Controle de Inventário
* Sistemas Comerciais

## Benefícios para uma empresa

* Centralização das informações de produtos;
* Redução de inconsistências por meio da validação automática dos dados;
* Organização do código em camadas, facilitando manutenção e evolução;
* API pronta para integração com aplicações Web, Mobile ou Dashboards;
* Estrutura escalável para inclusão de novos módulos e funcionalidades.

---

# 🚀 Tecnologias utilizadas

* Node.js
* Express
* TypeScript
* PostgreSQL
* TypeORM
* class-validator
* REST API

---

# 🏗 Arquitetura

O projeto foi desenvolvido seguindo uma arquitetura em camadas, promovendo separação de responsabilidades e maior facilidade de manutenção.

```text
Cliente
    │
    ▼
Routes
    │
    ▼
Controller
    │
    ▼
Service
    │
    ▼
TypeORM
    │
    ▼
PostgreSQL
```

### Responsabilidade de cada camada

| Camada         | Função                                                              |
| -------------- | ------------------------------------------------------------------- |
| **Routes**     | Define os endpoints da API                                          |
| **Controller** | Recebe as requisições HTTP e direciona para os serviços             |
| **Service**    | Contém as regras de negócio e validações                            |
| **Entity**     | Representa a estrutura da tabela no banco de dados                  |
| **Middleware** | Centraliza o tratamento de erros da aplicação                       |
| **TypeORM**    | Realiza o mapeamento objeto-relacional e o acesso ao banco de dados |

---

# 📁 Estrutura do projeto

```text
src/
├── controllers/
├── entities/
├── middleware/
├── routes/
├── services/
└── test/
```

---

# ⚙ Funcionalidades

* Cadastro de produtos;
* Listagem de todos os produtos;
* Atualização parcial de registros (PATCH);
* Exclusão de produtos;
* Validação automática dos dados;
* Tratamento centralizado de erros;
* Persistência em banco PostgreSQL.

---

# 🌐 Endpoints

| Método | Endpoint            | Descrição                |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/products`     | Lista todos os produtos  |
| POST   | `/api/products`     | Cadastra um novo produto |
| PATCH  | `/api/products/:id` | Atualiza um produto      |
| DELETE | `/api/products/:id` | Remove um produto        |

---

# 📝 Exemplo de requisição

### POST `/api/products`

```json
{
  "name": "Notebook",
  "quantity": 10,
  "price": 4500
}
```

### Resposta

```json
{
  "id": 1,
  "name": "Notebook",
  "quantity": 10,
  "price": 4500
}
```

---

# ✅ Validação dos dados

A API utiliza **class-validator** para validar automaticamente os dados enviados pelo cliente.

As principais validações implementadas são:

* Nome obrigatório;
* Quantidade obrigatória;
* Preço obrigatório;
* Verificação do tipo de cada campo.

---

# ⚠ Tratamento de erros

Foi implementado um middleware global responsável por padronizar as respostas de erro da aplicação.

Exemplo:

```json
{
  "message": "erro de validação",
  "errors": [
    "Nome do produto é obrigatório!"
  ]
}
```

---

# ▶ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/silaspmart/inventory-api.git
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente para conexão com o PostgreSQL.

Execute a aplicação:

```bash
npm run dev
```

---

# 🔄 Versionamento

## Versão 1.0

* API REST para gerenciamento de produtos;
* Operações CRUD completas;
* Integração com PostgreSQL utilizando TypeORM;
* Validação de dados com class-validator;
* Tratamento centralizado de erros;
* Organização em arquitetura de camadas.

---

# 💡 Melhorias futuras

* Implementação de autenticação com JWT;
* Documentação automática utilizando Swagger/OpenAPI;
* Testes automatizados;
* Paginação de resultados;
* Busca por nome de produto;
* Ordenação e filtros;
* Containerização com Docker;
* Pipeline de CI/CD.

---

# 👨‍💻 Autor

**Silas Pereira Martins**

Graduado em Engenharia de Produção e estudante do Curso Técnico em Desenvolvimento de Sistemas, com foco em desenvolvimento Back-end, APIs REST, Banco de Dados e Engenharia de Software.

* GitHub: https://github.com/silaspmart
* LinkedIn: https://www.linkedin.com/in/silas-martins-97b69194
