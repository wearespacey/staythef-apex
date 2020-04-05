import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const PrinterModelForm = () => {
  return (
    <Form>
      <Form.Group controlId='DesciptionTextField'>
        <Form.Label as='h3' className='title'>
          Plastic type
        </Form.Label>
        <Form.Control type='text' placeholder='PETG' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add
      </Button>
    </Form>
  );
};
