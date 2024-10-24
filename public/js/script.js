// Função para carregar e exibir os Pokémons
const loadPokemons = async () => {
    try {
        const response = await fetch('/api/pokemon');  // Rota do back-end que lista os pokémons
        const pokemons = await response.json();

        const pokemonList = document.getElementById('pokemon-list');
        pokemonList.innerHTML = '';  // Limpar a lista antes de renderizar

        pokemons.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.textContent = `${pokemon.nome} (Tipo: ${pokemon.tipo}, Altura: ${pokemon.altura}m, Peso: ${pokemon.peso}kg, Nível de Poder: ${pokemon.nivelDePoder})`;
            pokemonList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao carregar os pokémons:', error);
    }
};

// Função para adicionar um novo Pokémon
const addPokemon = async (event) => {
    event.preventDefault();  // Impedir o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const nivelDePoder = document.getElementById('nivelDePoder').value;

    const newPokemon = {
        nome,
        tipo,
        altura: parseFloat(altura),
        peso: parseFloat(peso),
        nivelDePoder: parseFloat(nivelDePoder)
    };

    try {
        const response = await fetch('/api/pokemons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPokemon)
        });

        if (response.ok) {
            alert('Pokémon adicionado com sucesso!');
            loadPokemons();  // Recarrega a lista de Pokémons
            document.getElementById('pokemon-form').reset();  // Limpa o formulário
        } else {
            alert('Erro ao adicionar o Pokémon.');
        }
    } catch (error) {
        console.error('Erro ao adicionar o pokémon:', error);
    }
};

// Quando a página carregar, vamos carregar os Pokémons
window.onload = loadPokemons;

// Adiciona evento ao formulário para adicionar Pokémon
document.getElementById('pokemon-form').addEventListener('submit', addPokemon);
