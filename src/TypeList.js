import React from 'react';
import axios from 'axios';

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
        <h1>Types</h1>
        <ul>
          {this.state.types.map(this.mapTypeToListItem)}
        </ul>
      </React.Fragment>
    );
  }

  mapTypeToListItem(type) {
    return (
      <li key={type.url}>
        {type.name}
      </li>
    )
  }
}

export default TypeList;
