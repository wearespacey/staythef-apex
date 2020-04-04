import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  CardDeck,
} from "react-bootstrap";
import { ProducerCard } from "../../components/ProducerCard";
import { IThreeModel } from "../../models/IThreeModel";
import { PrinterCard } from "../../components/PrinterCard";
import { IPrinterModel } from "../../models/IPrinterModel";

let initialValuesPlans: IThreeModel[] = [
  {
    id: "123",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1213",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
  {
    id: "1223",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
    title: "First model",
    description: "Nice model bro",
    dimensions: "15 cm x 25cm x 53 cm",
    gcodeUrl: "",
  },
];

let INTIIAL_VALUE: IPrinterModel = {
  id: "123",
  details: "Marque Imprimante 3D",
};

let INITIAL_3DMODEL: IThreeModel = {
  id: "123",
  imageUrl:
    "https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png",
  title: "First model",
  description: "Nice model bro",
  dimensions: "15x25x53 cm",
  gcodeUrl: "",
};

export const Consumer = () => {
  const [isPrinter, setisPrinter] = useState(false);
  const [modelsPlans, setModelsPlans] = useState<IThreeModel[]>([
    INITIAL_3DMODEL,
    INITIAL_3DMODEL,
    INITIAL_3DMODEL,
  ]);

  const [modelsPrinter, setmodelsPrinter] = useState<IPrinterModel[]>([
    INTIIAL_VALUE,
    INTIIAL_VALUE,
    INTIIAL_VALUE,
    INTIIAL_VALUE,
  ]);

  return (
    <>
      <Row>
        <Col xs={2}>
          <DropdownButton 
            id="consumer-choice"
            variant="danger"
            title="Plans / Printers"
          >
            <Dropdown.Item eventKey="1" onClick={() => setisPrinter(false)}>
              Plans
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => setisPrinter(true)}>
              Printers
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          {isPrinter ? (
            <CardDeck className="m-4">
              {modelsPrinter.map((model, index) => (
                <PrinterCard
                  width={300}
                  height={450}
                  key={index}
                  printer={model}
                  onClick={() => console.log("You clicked on an item!")}
                  contentButton="Negotiate !"
                />
              ))}
            </CardDeck>
          ) : (
            <CardDeck className="m-4">
              {modelsPlans.map((model, index) => (
                <ProducerCard
                  width={300}
                  height={485}
                  key={index}
                  producer={model}
                  onClick={() => console.log("You clicked on an item!")}
                  contentButton="Negotiate !"
                />
              ))}
            </CardDeck>
          )}
        </Col>
      </Row>
    </>
  );
};
