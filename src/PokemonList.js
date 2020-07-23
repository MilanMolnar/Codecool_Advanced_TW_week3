import React from 'react';
import { Link } from "react-router-dom";
import './PokemonList.css';

class PokemonList extends React.Component {
  render() {
    const prevButton = this.props.offset === 0
      ? <React.Fragment/>
      : <button id="prev-btn" onClick={this.props.getPrev20}>Prev 20</button>;
    return (
      <React.Fragment>
        <ul style={{textAlign: "center"}}>
          {this.props.pokemons.map(this.mapPokemonToListItem)}
          
        </ul>
        {prevButton}
        <button id="next-btn" onClick={this.props.getNext20}>Next 20</button>
      </React.Fragment>
    );
  }

  mapPokemonToListItem(pokemon) {
    return (
      <li id="poke-item" style={{display: "inline-block"}} key={pokemon.url}>
        <Link to={`/pokemons/${pokemon.id}`}>
          <img alt="pokemonListItem" src={pokemon.image_url}/>
          <p id="poke-name">{pokemon.name}</p>
        </Link>
      </li>
    )
  }
}

export default PokemonList;
