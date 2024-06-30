import axios from 'axios';

export const fetchImages = async () => {
  try {
    console.log('Fetching Pokémon...');
    
    const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const pokemonPromises = pokemonIds.map(id =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    );

    const pokemonResponses = await Promise.all(pokemonPromises);
    const pokemonData = pokemonResponses.map(response => ({
      image: response.data.sprites.front_default,
      text: response.data.name,
    }));

    console.log('Pokemon Data:', pokemonData);
    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
};
