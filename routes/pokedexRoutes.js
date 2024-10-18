const express = require('express');
const router = express.Router();
const pokedexController = require('../controllers/pokedexController');

// Rota para criar um novo Pokémon
router.post('/pokemon', pokedexController.createPokemon);

// Rota para obter a lista de Pokémons
router.get('/pokemon', pokedexController.getPokemon);

// (Opcional) Rota para buscar um Pokémon específico por tipo
router.get('/pokemon/:tipo', pokedexController.getPokemonByType);

module.exports = router;
