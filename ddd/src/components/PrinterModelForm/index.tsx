import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const PrinterModelForm = () => {
  const [state, setState] = useState<boolean>(true);

  let handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log(e);
    setState(false);
    if (validateForm()) {
      const submitSuccess: boolean = await submitForm();
    }
    setState(true);
  };
  function validateForm(): boolean {
    console.log("Valide form");
    return true;
  }
  async function submitForm(): Promise<boolean> { // TO DO LINK with form 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "price": 1.2,
          "plastic": "PLA",
          "producerId": "hXLzwZ35hkj24iZRaPs8"
      })
    };
    fetch('https://staythefuckapex-api.azurewebsites.net/api/3dprinters/new', requestOptions)
    console.log("send");
    return true;
  }


  return (
    <Form  onSubmit={handleSubmit}>
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
      <div hidden={state}>
        Loading ...
      </div>
    </Form>
  );
};
