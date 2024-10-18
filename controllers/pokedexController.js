const { Pokedex } = require('../models');

const pokedexController = {
    // Exibir a lista de Pokémons
    getPokemon: async (req, res) => {
        try {
            const pokemons = await Pokedex.findAll();
            res.render('index', { pokemons });  // Renderiza a view 'index.ejs' e passa a lista de Pokémons
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar Pokémons' });
        }
    },

    // Exibir os detalhes de um Pokémon específico
    getPokemonByType: async (req, res) => {
        const { tipo } = req.params;
        try {
            const pokemon = await Pokedex.findOne({ where: { tipo } });
            if (pokemon) {
                res.render('pokemon', { pokemon });  // Renderiza a view 'pokemon.ejs' e passa os detalhes do Pokémon
            } else {
                res.status(404).json({ message: 'Pokémon não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar Pokémon' });
        }
    }
};

module.exports = pokedexController;
