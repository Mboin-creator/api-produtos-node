# API de Produtos

API RESTful para gerenciamento de produtos, construída com Node.js, Express e Joi para validação. Possui frontend simples servido via Express para listar, adicionar, editar e excluir produtos.

---

## Tecnologias usadas

- Node.js  
- Express  
- Joi (validação de dados)  
- CORS  
- JavaScript (frontend simples)

---

## Como rodar a API

1. Clone o repositório:
```bash
git clone git@github.com:Mboin-creator/api-produtos-node.git.
cd api-produtos-node
npm install
npm start
npm run dev
```
## Endpoints principais
GET /produtos — Lista todos os produtos

POST /produtos — Adiciona um novo produto

Corpo JSON:
```
{
  "nome": "Produto",
  "preco": 99.99,
  "descricao": "opcional"
}
```
PUT /produtos/:id — Edita um produto pelo ID

Corpo JSON igual ao POST

DELETE /produtos/:id — Remove um produto pelo ID

## Como testar
Você pode usar ferramentas como Insomnia ou Postman para testar os endpoints acima.

## Autor
Mauricio Otávio Gallo Boin

[![LinkedIn](https://img.shields.io/badge/LinkedIn-000?style=for-the-badge&logo=linkedin&logoColor=3#0000CD)](https://www.linkedin.com/in/mauricio-ot%C3%A1vio-gallo-boin-255667185//)
