import React, { useState } from "react";
import { CardDeck } from "react-bootstrap";

import { IPrinterModel } from "../../models/IPrinterModel";
import { PrinterCard } from '../../components/PrinterCard';

const INTIIAL_VALUE: IPrinterModel = {
  id: "123",
  details: "Marque Imprimante 3D",
};

export const PrinterCards = () => {
    const [models, setModels] = useState<IPrinterModel[]>([
    INTIIAL_VALUE,
    INTIIAL_VALUE,
    INTIIAL_VALUE,
    INTIIAL_VALUE,
  ]);

  return (
    <CardDeck className='m-4'>
      {models.map((model, index) => (
        <PrinterCard
          width={300}
          height={450}
          key={index}
          printer={model}
          onClick={() => console.log('You clicked on an item!')}
          contentButton='Click !'
        />
      ))}
    </CardDeck>
  );
}