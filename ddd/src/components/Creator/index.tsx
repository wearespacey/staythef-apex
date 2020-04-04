import React, { useState } from "react";
import { ListModels } from "./ListModels";
import { IThreeModel } from "../../models/IThreeModel";
import { Container } from "react-bootstrap";

// Page of creator (tab) displays creations
let initialValues: IThreeModel[] = [
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
];

export const Creator = () => {
  const [models, setModels] = useState<IThreeModel[]>(initialValues);

  return <ListModels models={models} />;
};
