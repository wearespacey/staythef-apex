import React from 'react';
import { Container, Accordion, Button } from 'react-bootstrap';

import { ThreeDModelForm } from '../../components/ThreeDModelForm';
import { ThreeDModelCards } from '../../containers/ThreeDModelCards';

export const Contributor = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Toggle as={Button} eventKey='0'>
          Toggle form
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Container>
            <h2 className='title'>3D Model Form</h2>
            <ThreeDModelForm />
          </Container>
        </Accordion.Collapse>
      </Accordion>

      <ThreeDModelCards />
    </div>
  );
};
