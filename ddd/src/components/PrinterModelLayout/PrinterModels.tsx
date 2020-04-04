import React from "react";
import { CardDeck,Card } from "react-bootstrap";
import { IPrinterModel } from "../../models/IPrinterModel";
import printer from "../../assets/printer3d.png";

interface IProps {
  models: IPrinterModel[];
}

export const ListModels: React.FC<IProps> = ({ models }) => {
  return (
    <CardDeck>
    {models.map((model) => (
          <CardDeck>
            <Card className="ml-5" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={printer} />
              <Card.Body>
                <Card.Title>{model.id}</Card.Title>
                <Card.Text>{model.details}</Card.Text>
              </Card.Body>  
            </Card>
          </CardDeck>
      ))}
    </CardDeck>
  );
};
