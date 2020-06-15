import React from "react";
import { Card } from "react-bootstrap";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      berries: []
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(allpokemon => {
        this.setState({
          berries: allpokemon.results
        });
        console.log(allpokemon.results);
      });
  }

  render() {
    return this.state.berries.map(b => {
      return (
        <Card key={b.name}>
          <Card.Body>
            <detail>
              <summary>{b.name}</summary>
              <p>{b.url}</p>
            </detail>
          </Card.Body>
        </Card>
      );
    });
  }
}
