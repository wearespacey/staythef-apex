import React, { useState } from "react";
import { Container, CardDeck, Button, Accordion } from "react-bootstrap";

import { IPrinterModel } from "../../models/IPrinterModel";
import { PrinterAddForms } from "../../components/PrinterAddForms";
import { PrinterCard } from "../../components/PrinterCard";

let INTIIAL_VALUE: IPrinterModel = {
  id: "123",
  details: "Marque Imprimante 3D",
};

export const Producer = () => {
  const [models, setModels] = useState<IPrinterModel[]>([
    INTIIAL_VALUE,
    INTIIAL_VALUE,
    INTIIAL_VALUE,
    INTIIAL_VALUE,
  ]);

  return (
    <div>
      <Accordion>
        <Accordion.Toggle as={Button} eventKey="0">
          Toggle form
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Container>
            <PrinterAddForms />
          </Container>
        </Accordion.Collapse>
      </Accordion>

      <CardDeck className="m-4">
        {models.map((model, index) => (
          <PrinterCard
            width={300}
            height={450}
            key={index}
            printer={model}
            onClick={() => console.log("You clicked on an item!")}
            contentButton="Click !"
          />
        ))}
      </CardDeck>
    </div>
  );
};
