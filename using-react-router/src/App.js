import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import "./styles.css";
import Products from "./components/Products";

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar bg="light">
          <Navbar.Brand href="/">Brand text</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
        </Navbar>
        <section>
          <Router>
            <Container>
              <Row>
                <Col sm={2} className="d-flex justify-content-center">
                  <aside>
                    <nav>
                      <ul style={{ listStyleType: "none" }}>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/products">Products</Link>
                        </li>
                      </ul>
                    </nav>
                  </aside>
                </Col>
                <Col>
                  <div>
                    <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route path="/products">
                        <Products />
                      </Route>
                    </Switch>
                  </div>
                </Col>
              </Row>
            </Container>
          </Router>
        </section>
        <footer>Footer goes here</footer>
      </main>
    );
  }
}
