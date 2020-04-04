import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const PrinterAddForms = () => {
  return (
    <div>
      <span className='title'>Printer Form</span>
      <Form>
        <Form.Group controlId='DesciptionTextField'>
          <Form.Label className='h2 title'>Description</Form.Label>
          <Form.Control type='text' placeholder='Original Prusa i3 MK3S.' />
        </Form.Group>
        <Button variant='primary' type='submit'>Add</Button>
      </Form>
    </div>
  );
};
