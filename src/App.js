import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import React from "react";
import "./startAssets/style.css";
import Mainlinks from "./components/Mainlinks";
import Albums from "./components/Albums";
import Searchsection from "./components/Searchsection";
import PlayerControls from "./components/Playcontrols";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="d-none d-md-block col-md-2">
          <Sidebar />
        </Col>
        <Col>
          <Mainlinks />
          <Searchsection />
          <Row className="mt-5">
            <h1 className="text-white">Rock classic</h1>
            <Albums query="rock" />
          </Row>
          <Row className="mt-3">
            <h1 className="text-white">Pop culture</h1>
            <Albums query="pop culture" />
          </Row>
          <Row className="mt-3">
            <h1 className="text-white">Hip hop</h1>
            <Albums query="hiphop" />
          </Row>
          <PlayerControls />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
