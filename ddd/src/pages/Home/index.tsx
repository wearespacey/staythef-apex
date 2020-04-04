import React from "react";
import { Container, Button } from "react-bootstrap";
import "./styles.css";

export const Home = () => {
  return (
    <div className="background">
      <title as="h1">DDD</title>
      <Container fluid>
        <Button variant="warning" onClick={() => console.log("Consommateur")}>
          Consommateur
        </Button>
        <Button variant="warning" onClick={() => console.log("Producteur")}>Producteur</Button>
        <Button variant="warning" onClick={() => console.log("Contributeur")}>
          Contributeur
        </Button>
      </Container>
    </div>
  );
};
