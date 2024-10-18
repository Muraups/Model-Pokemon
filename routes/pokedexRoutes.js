const express = require('express');
const router = express.Router();
const pokedexController = require('../controllers/pokedexController');

// Rota para exibir a lista de Pokémons
router.get('/pokemon', pokedexController.getPokemon);

// Rota para exibir os detalhes de um Pokémon específico por tipo
router.get('/pokemon/:tipo', pokedexController.getPokemonByType);

module.exports = router;
