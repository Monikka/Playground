import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import sprite from "../assets/sprite.png";

class Home extends React.Component {
  navigate() {
    console.log("clicked");
    this.props.history.push("/products");
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.navigate()}>Go to Products</Button>
        <div className="icon" />
        <img src={sprite} alt="navigation icons" />
        <h1>Home</h1>
      </div>
    );
  }
}

export default withRouter(Home);
