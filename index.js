 const express = require('express'); // Framework para servidor web
const cors = require('cors');       // Permite que o frontend acesse a API
const Joi = require('joi');         // Validação de dados

const app = express(); // Cria a aplicação

app.use(cors());              // Libera o acesso externo à API
app.use(express.json());      // Permite que a API entenda JSON no corpo da requisição
app.use(express.static('public')); // Serve arquivos HTML, CSS, JS da pasta "public"

// Simulação de banco de dados em memória
let produtos = [];
let idAtual = 1;

// Esquema de validação de produto
const produtoSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  preco: Joi.number().positive().required(),
  descricao: Joi.string().optional()
});

// 🟢 Rota GET — listar produtos
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// 🟡 Rota POST — adicionar novo produto
app.post('/produtos', (req, res) => {
  const { error } = produtoSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });

  const novo = { id: idAtual++, ...req.body };
  produtos.push(novo);
  res.status(201).json(novo);
});

// 🟠 Rota PUT — editar produto
app.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

  const { error } = produtoSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  produto.descricao = req.body.descricao;
  res.json(produto);
});

// 🔴 Rota DELETE — remover produto
app.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  produtos.splice(index, 1);
  res.status(204).send();
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});

