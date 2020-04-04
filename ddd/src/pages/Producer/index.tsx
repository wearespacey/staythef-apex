import React, { useState } from "react";
import { ListModels } from "../../components/PrinterModelLayout/PrinterModels";
import { IPrinterModel } from "../../models/IPrinterModel";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PrinterAddForms } from "../../components/PrinterModelLayout/PrinterAddForms";

// Page of creator (tab) displays creations
let initialValues: IPrinterModel[] = [
  {
    id: "123",
    details:
      "MARQUE 3D PRINTER",
  },  
  {
    id: "124",
    details:
      "MARQUE 3D PRINTER",
  },
  {
    id: "125",
    details:
      "MARQUE 3D PRINTER",
  },
];

export const Producer = () => {
  const [models, setModels] = useState<IPrinterModel[]>(initialValues);

  return ( 
    <div>
      <ListModels models={models}/>
      <Button variant="primary" size="lg" block>
        Ajouter une imprimante 3d
      </Button>
      <PrinterAddForms></PrinterAddForms>
    </div>
    );
};
