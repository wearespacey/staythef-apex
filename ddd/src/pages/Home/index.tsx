import React from "react";
import { Container, Button } from "react-bootstrap";
import "./styles.css";

export const Home = () => {
  return (
    <div className="background">
      <Container fluid>
        <span className="title">Stay the fuck Apex</span>
        
        <Button onClick={() => console.log("Consommateur")}>
          Consommateur
        </Button>
        <Button onClick={() => console.log("Producteur")}>
          Producteur
        </Button>
        <Button onClick={() => console.log("Contributeur")}>
          Contributeur
        </Button>
      </Container>
    </div>
  );
};
