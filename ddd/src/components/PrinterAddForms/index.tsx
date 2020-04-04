import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const PrinterAddForms = () => {
  return (
    <>
      <h2 className='title'>Printer Form</h2>

      <Form>
        <Form.Group controlId='DesciptionTextField'>
          <Form.Label as='h3' className='title'>
            Description
          </Form.Label>
          <Form.Control type='text' placeholder='Original Prusa i3 MK3S.' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Add
        </Button>
      </Form>
    </>
  );
};
