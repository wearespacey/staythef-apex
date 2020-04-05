import React, { useState } from 'react';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { PrinterCards } from '../../containers/PrinterCards';
import { ThreeDModelCards } from '../../containers/ThreeDModelCards';

export const Consumer = () => {
  const [isPrinter, setisPrinter] = useState(false);

  return (
    <>
      <Row>
        <Col xs={2}>
          <DropdownButton
            id='consumer-choice'
            title='Models / Producers'
          >
            <Dropdown.Item eventKey='1' onClick={() => setisPrinter(false)}>
              Models
            </Dropdown.Item>
            <Dropdown.Item eventKey='2' onClick={() => setisPrinter(true)}>
              Producers
            </Dropdown.Item>
          </DropdownButton>
          <h2 className='title'>{isPrinter ? 'Producers' : 'Models'}</h2>
        </Col>
        <Col>{isPrinter ? <PrinterCards /> : <ThreeDModelCards />}</Col>
      </Row>
    </>
  );
};
