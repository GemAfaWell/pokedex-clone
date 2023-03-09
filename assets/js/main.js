// Pokedex App using PokeAPI
// Author: @GemAfaWell

// Global Variables
const container = document.querySelector('.container');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonImage = document.getElementById('pokemon-img');
const pokemonTypes = document.getElementById('pokemon-types');
const pokemonDesc = document.getElementById('pokemon-description');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonAbilities = document.getElementById('pokemon-abilities');
const pokemonSearchBtn = document.getElementById('generate');

// function to get the Pokemon data
function getPokemon() {
  // set up the API endpoint URL
  const url = 'https://api.pikaserve.xyz/pokemon/random';

  // define async function to fetch the data
  async function getPokemonData(url) {
    // store the response from the API endpoint
    const response = await fetch(url);
    // store the data from the response in JSON format
    var data = await response.json();
    console.log(data);
    // display the Pokemon data
    displayPokemon(data);
  }
  getPokemonData(url);
  function displayPokemon(data) {
    // toggle the hidden class to show the Pokemon data
    container.classList.add('poke-container');
    // display the Pokemon name
    pokemonName.innerHTML = `It's ${data.name.english}!`;
    // display the Pokemon ID
    pokemonId.innerHTML = `#${data.id}`;
    // display the Pokemon image
    pokemonImage.innerHTML = `<img src="${data.image.hires}" alt="${data.name}">`;
    // display the Pokemon types
    pokemonTypes.innerHTML = 'Type: ' + data.type[0];
    if (data.type[1]) {
      pokemonTypes.innerHTML += ' / ' + data.type[1];
    } else if (data.type === null) {
      pokemonTypes.innerHTML = `Types: <span>None</span>`;
    }
    // display the Pokemon description
    pokemonDesc.innerHTML = `${data.description}`;
    // display the Pokemon height
    pokemonHeight.innerHTML = `Height(m/cm): ${data.profile.height}`;
    // display the Pokemon weight
    pokemonWeight.innerHTML = `Weight(kg): ${data.profile.weight}`;
    // display the Pokemon abilities
    pokemonAbilities.innerHTML = `Ability: ${data.profile.ability[0][0]}`;
    // smooth scroll to the Pokemon data
    container.scrollIntoView({ behavior: 'smooth' });
  }
}


// event listener to get a new Pokemon when the button is clicked
pokemonSearchBtn.addEventListener('click', getPokemon);
