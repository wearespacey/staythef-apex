import React from 'react';
import { Container, Button, Accordion } from 'react-bootstrap';

import { PrinterModelForm } from '../../components/PrinterModelForm';
import { PrinterCards } from '../../containers/PrinterCards';

export const Producer = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Toggle as={Button} eventKey='0'>
          Toggle form
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Container>
            <h2 className='title'>Printer Form</h2>
            <PrinterModelForm />
          </Container>
        </Accordion.Collapse>
      </Accordion>

      <PrinterCards />
    </div>
  );
};
