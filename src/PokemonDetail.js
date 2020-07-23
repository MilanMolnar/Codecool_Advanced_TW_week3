import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abilities: [],
    };
    this.handlePokemonListResponse = this.handlePokemonListResponse.bind(this);
    this.handlePokemonDetailsResponse = this.handlePokemonDetailsResponse.bind(
      this
    );
  }

  render() {
    if (this.state.pokemon && this.state.abilities) {
      return (
        <React.Fragment>
          <h1>Pokemon Details:</h1>
          <img alt="pokemonDetails" src={this.state.pokemon.image_url} />

          <h4>Pokemon name:</h4>
          {this.state.pokemon.name}

          <h4>Abilities:</h4>
          {this.state.abilities.map((ability) => (
            <p>
              {ability.name} {ability.text}
            </p>
          ))}
        </React.Fragment>
      );
    }
    return <></>;
  }

  componentDidMount() {
    const pokemon = this.props.pokemons.find(
      (pokemon) => pokemon.id === parseInt(this.props.match.params.id, 10)
    );
    this.setState({ pokemon });
    this.handlePokemonListResponse(pokemon.abilities);
  }

  handlePokemonListResponse(pokemonAbility) {
    Promise.all(
      pokemonAbility.map((element) => axios.get(element.ability.url))
    ).then(this.handlePokemonDetailsResponse);
  }

  handlePokemonDetailsResponse(responses) {
    this.setState({
      abilities: responses.map((response) => {
        return {
          name: response.data.name,
          text: response.data.effect_entries[1].effect,
        };
      }),
    });
  }
}

export default withRouter(PokemonDetail);
