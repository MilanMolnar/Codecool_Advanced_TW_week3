import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

class PokemonDetail extends React.Component {
  render() {
    const pokemon = this.props.pokemons.find(
      (pokemon) => pokemon.id === parseInt(this.props.match.params.id, 10)
    );
    const pokemonAbility = pokemon.abilities;
    const abilityDesc = pokemon.abilities.map((ability) => ability.url);

    return (
      <React.Fragment>
        <h1>Pokemon Details:</h1>
        <img alt="pokemonDetails" src={pokemon.image_url} />

        <h4>Pokemon name:</h4>
        {pokemon.name}

        <h4>Abilities:</h4>
        {pokemonAbility.map(this.mapPokemonToListItem)}
      </React.Fragment>
    );
  }

  mapPokemonToListItem(pokemon) {
    return <p key={pokemon.abilities}>{pokemon.ability.name}</p>;
  }
}

export default withRouter(PokemonDetail);
