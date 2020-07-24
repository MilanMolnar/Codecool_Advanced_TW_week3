import React from 'react';
import { Link } from "react-router-dom";
import './PokemonList.css';
import axios from 'axios';

class Mypokemons extends React.Component {
  render() {
    
    return (
      <React.Fragment>
        <ul id="poke-ul" style={{textAlign: "center", display: "inline-block",margin:'200px'}}>
          {this.props.pokemons.map(this.mapPokemonToListItem)}
          
        </ul>
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

export default Mypokemons;
