const { Pokedex } = require('../models');

const pokedexController = {
    // Criar um novo Pokémon
    createPokemon: async (req, res) => {
        const { nome, tipo, altura, peso, nivelDePoder } = req.body;
        try {
            const novoPokemon = await Pokedex.create({ nome, tipo, altura, peso, nivelDePoder });
            res.json(novoPokemon);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar Pokémon' });
        }
    },

    // Obter a lista de todos os Pokémons
    getPokemon: async (req, res) => {
        try {
            const pokemons = await Pokedex.findAll();
            res.json(pokemons);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar Pokémons' });
        }
    },

    // Obter um Pokémon específico por tipo
    getPokemonByType: async (req, res) => {
        const { tipo } = req.params;
        try {
            const pokemon = await Pokedex.findOne({ where: { tipo } });
            if (pokemon) {
                res.json(pokemon);
            } else {
                res.status(404).json({ message: 'Pokémon não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar Pokémon' });
        }
    }
};

module.exports = pokedexController;
