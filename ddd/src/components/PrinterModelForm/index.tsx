import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const PrinterModelForm = () => {
  const [state, setState] = useState<boolean>(true);

  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState(false);
    if (validateForm()) {
      await submitForm();
    }
    setState(true);
  };

  function validateForm(): boolean {
    return true;
  }
  async function submitForm() {
    let submitted = false;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: 1,
        plastic: 'PLA',
        producerId: 'hXLzwZ35hkj24iZRaPs8',
      }),
    };

    fetch(
      'https://staythefuckapex-api.azurewebsites.net/api/3dprinters/new',
      requestOptions
    )
      .then(r => submitted = true)
      .catch(e => submitted = false);

    return submitted;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='DesciptionTextField'>
        <Form.Label as='h3' className='title'>
          Plastic type
        </Form.Label>
        <Form.Control type='text' placeholder='PETG' />
      </Form.Group>
      
      <Form.Group controlId='PriceField'>
        <Form.Label as='h3' className='title'>
          Print price
        </Form.Label>
        <Form.Control type='number' placeholder='1' />
      </Form.Group>
      
      <Button variant='primary' type='submit'>
        Add
      </Button>
      <div hidden={state}>Loading ...</div>
    </Form>
  );
};
