import {
    pokemonArray
} from "./data/pokemon.js";
console.log(pokemonArray);

let searchResult = [];

const getPokemon = (pokemon) => {
    return `<div class="card">
            <div class="card__content">${pokemon.id}</div>
            <img class="card__content card__image" src="${pokemon.sprite}"/>
            <h1 class="card__content card__heading card__text">${pokemon.name}</h1>
            <div class="card__content"><p class="card__content card__text">is a ${pokemon.types.join(
            ", "
        )} type pokemon</p></div>
        </div>`;
};
const card = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
    card.innerHTML += getPokemon(pokemon);
});

const searchBar = document.getElementsByTagName("input")[0];

const searchPokemon = (event) => {
    event.preventDefault();
    const input = event.target.value.toLowerCase();
    console.log(input);
    searchResult = pokemonArray.filter(pokemon => pokemon.name.includes(input));
    console.log(searchResult);
};

const showResult = () => {
    card.innerHTML = "";
    searchResult.forEach((result) => {
        card.innerHTML += getPokemon(result);
    });
}

searchBar.addEventListener("keyup", searchPokemon);
searchBar.addEventListener("keyup", showResult);