import React, { useState } from 'react';
import { Container, CardDeck, Button } from 'react-bootstrap';

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

const style = {
  display: 'none',
};

function showtoggle(){
  var x = document.getElementById("form");
  if(x != null){
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
  }
}


export const Producer = () => {
  const [models, setModels] = useState<IPrinterModel[]>(initialValues);

  return (
    <div>
      <Button onClick={showtoggle} variant='primary' size='lg' block>
        Ajouter une imprimante 3d
      </Button>
      <div id="form" style={style}>
        <Container>
          <PrinterAddForms />
        </Container>
      </div>
      <CardDeck className='m-5'>
        {models.map((model, index) => (
          <PrinterCard width={300} height={400} key={index} printer={model} />
        ))}
      </CardDeck>
    </div>
  );
};
