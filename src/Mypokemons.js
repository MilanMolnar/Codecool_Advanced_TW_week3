import React from 'react';
import { Link } from "react-router-dom";
import './PokemonList.css';
import axios from 'axios';

class Mypokemons extends React.Component {
    fetchPokemons(offset) {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${offset}`).then(this.handlePokemonListResponse)
    }

  render() {
    
    return (
      <React.Fragment>
        <ul id="poke-ul" style={{textAlign: "center"}}>
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
