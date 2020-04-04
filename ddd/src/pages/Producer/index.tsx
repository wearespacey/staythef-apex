import React, { useState } from 'react';
import { Container, CardDeck, Button, Accordion } from 'react-bootstrap';

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
      <Accordion>
        <Accordion.Toggle as={Button} eventKey='0'>
          Toggle form
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Container>
            <PrinterAddForms />
          </Container>
        </Accordion.Collapse>
      </Accordion>

      <CardDeck className='m-5'>
        {models.map((model, index) => (
          <PrinterCard width={300} height={400} key={index} printer={model} />
        ))}
      </CardDeck>
    </div>
  );
};
