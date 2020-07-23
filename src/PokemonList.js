import React from 'react';
import { Link } from "react-router-dom";

class PokemonList extends React.Component {
  render() {
    const prevButton = this.props.offset === 0
      ? <React.Fragment/>
      : <button onClick={this.props.getPrev20}>Prev 20</button>;
    return (
      <React.Fragment>
        <h1>Pokemons</h1>
        <ul>
          {this.props.pokemons.map(this.mapPokemonToListItem)}
          
        </ul>
        {prevButton}
        <button onClick={this.props.getNext20}>Next 20</button>
      </React.Fragment>
    );
  }

  mapPokemonToListItem(pokemon) {
    return (
      <li key={pokemon.url}>
        <Link to={`/pokemons/${pokemon.id}`}>
          <img alt="pokemonListItem" src={pokemon.image_url}/>
          {pokemon.name}
        </Link>
      </li>
    )
  }
}

export default PokemonList;
