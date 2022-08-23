import {pokemonArray} from "./data/pokemon.js";
console.log(pokemonArray);

const getPokemon = (pokemon) => {
    return `<div class="card">
            <div class="card__content">${pokemon.id}</div>
            <img class="card__content card__image" src="${pokemon.sprite}"/>
            <h1 class="card__content card__heading">${pokemon.name}</h1>
            <div class="card__content"><p class="card__text">is a ${pokemon.types.join(", ")} type pokemon</p></div>
        </div>`
}

const card = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
    card.innerHTML += getPokemon(pokemon);
   });