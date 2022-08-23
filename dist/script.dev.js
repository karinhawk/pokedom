"use strict";

var _pokemon = require("./data/pokemon.js");

console.log(_pokemon.pokemonArray);

var getPokemon = function getPokemon(pokemon) {
  return "<div class=\"card\">\n            <div class=\"card__content\">".concat(pokemon.id, "</div>\n            <img class=\"card__content card__image\" src=\"").concat(pokemon.sprite, "\"/>\n            <h1 class=\"card__content card__heading card__text\">").concat(pokemon.name, "</h1>\n            <div class=\"card__content\"><p class=\"card__content card__text\">is a ").concat(pokemon.types.join(", "), " type pokemon</p></div>\n        </div>");
};

var card = document.querySelector(".card-container");

_pokemon.pokemonArray.forEach(function (pokemon) {
  card.innerHTML += getPokemon(pokemon);
});