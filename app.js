const express = require('express');          // Importa o Express
const bodyParser = require('body-parser');   // Importa o body-parser para tratar requisições JSON
const pokedexRoutes = require('./routes/pokedexRoutes');  // Importa as rotas da Pokédex

const app = express();  // Inicializa o servidor Express

app.use(bodyParser.json());  // Habilita o uso de JSON no corpo das requisições

// Usa as rotas da Pokédex
app.use('/api', pokedexRoutes);  // As rotas da Pokédex estarão acessíveis com o prefixo '/api'

// Configura a porta do servidor
const PORT = 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
