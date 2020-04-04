import React, { useState } from 'react';
import { Container, CardDeck } from 'react-bootstrap';

import { IPrinterModel } from '../../models/IPrinterModel';
import { PrinterAddForms } from '../../components/PrinterAddForms';
import { PrinterCard } from '../../components/PrinterCard';

let INTIIAL_VALUE: IPrinterModel = {
  id: '123',
  details: 'Marque Imprimante 3D',
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
      <Container>
        <PrinterAddForms />
      </Container>
      <CardDeck className='m-4'>
        {models.map((model, index) => (
          <PrinterCard width={300} height={400} key={index} printer={model} />
        ))}
      </CardDeck>
    </div>
  );
};
