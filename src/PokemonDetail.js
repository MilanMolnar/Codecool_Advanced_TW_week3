import React from 'react';
import { withRouter } from "react-router";

class PokemonDetail extends React.Component {
  render() {
    const pokemon = this.props.pokemons.find((pokemon) => pokemon.id === parseInt(this.props.match.params.id, 10))
    return (
      <React.Fragment>
        <h1>{pokemon.name}</h1>
        <img alt="pokemonDetails" src={pokemon.image_url}/>
      </React.Fragment>
    );
  }
}

export default withRouter(PokemonDetail);
