import React, { useState } from 'react';
import { IPrinterModel } from '../../models/IPrinterModel';
import { Button } from 'react-bootstrap';
import { PrinterAddForms } from '../../components/PrinterModelLayout/PrinterAddForms';
import { EntityList } from '../../components/EntityList';
import { PrinterCard } from '../../components/PrinterCard';

// Page of creator (tab) displays creations
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
];

export const Producer = () => {
  const [models, setModels] = useState<IPrinterModel[]>(initialValues);
  const children = models.map((model, index) => (
    <PrinterCard key={index} printer={model} />
  ));

  return (
    <div>
      <EntityList>{children}</EntityList>
      <Button variant='primary' size='lg' block>
        Ajouter une imprimante 3d
      </Button>
      <PrinterAddForms></PrinterAddForms>
    </div>
  );
};
