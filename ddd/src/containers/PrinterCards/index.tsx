import React, { useState, useEffect } from "react";
import { CardDeck } from "react-bootstrap";

import { IPrinterModel } from "../../models/IPrinterModel";
import { PrinterCard } from '../../components/PrinterCard';

const INTIIAL_VALUE: IPrinterModel = {
  id: "123",
  plastic: "123",
  producerId : "",
};

export const PrinterCards = () => {
  const [models, setModels] = useState<IPrinterModel[]>([]);

  async function api(){
    const res = await fetch('https://staythefuckapex-api.azurewebsites.net/api/3dprinters');
    const data = await res.json();
    setModels(data as IPrinterModel[]);
  };

  useEffect(() => {
    api();
    return () => {
    }
  }, []);

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