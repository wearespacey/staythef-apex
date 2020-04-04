import React, { useState } from 'react';
import { Container, CardDeck } from 'react-bootstrap';

import { IPrinterModel } from '../../models/IPrinterModel';
import { PrinterAddForms } from '../../components/PrinterAddForms';
import { PrinterCard } from '../../components/PrinterCard';

let initialValues: IPrinterModel[] = [
  {
    id: '123',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '124',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
  {
    id: '125',
    details: 'MARQUE 3D PRINTER',
  },
];

export const Producer = () => {
  const [models, setModels] = useState<IPrinterModel[]>(initialValues);

  return (
    <div>
      <Container>
        <PrinterAddForms />
      </Container>
      <CardDeck className='m-5'>
        {models.map((model, index) => (
          <PrinterCard width={300} height={400} key={index} printer={model} />
        ))}
      </CardDeck>
    </div>
  );
};
