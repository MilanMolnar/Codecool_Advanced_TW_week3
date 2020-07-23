import React from 'react';
import axios from 'axios';
import './TypeList.css';

class TypeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        types: []
      }
    }


  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/type')
      .then((response) => this.setState({types: response.data.results}))
  }

  render() {
    return (
      <React.Fragment>
        <ul id="ul-types">
          {this.state.types.map(this.mapTypeToListItem)}
        </ul>
      </React.Fragment>
    );
  }

  mapTypeToListItem(type) {
    return (
      <li id="li-type" key={type.url}>
        <p id="type-name">{type.name}</p>
      </li>
    )
  }
}

export default TypeList;
