const express = require('express');
const bodyParser = require('body-parser');
const pokedexRoutes = require('./routes/pokedexRoutes'); // Importando o arquivo de rotas

const app = express();

// Configuração do mecanismo de visualização (EJS)
app.set('view engine', 'ejs');

// Configurar a pasta de views
app.set('views', './views'); // Diretório onde as views estarão

app.use(bodyParser.json());

// Usar as rotas da Pokedex
app.use('/api', pokedexRoutes);

// Configuração do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
