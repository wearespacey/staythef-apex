import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import { wait } from '@testing-library/react';
import { IThreeModel } from '../../models/IThreeModel';
import { stringify } from 'querystring';

export const ThreeDModelForm = () => {
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
          price: 7954621,
          title: "Tour Eiffel2",
          dimensions: "énorme",
          imagesUrl: "String",
          description: "Votre propre tour eiffel",
          gcodeUrl: "blablaurlgcode",
          creatorId: "pqd1DpVqvIOVjAuAYTzA"
      })
    };
    fetch('https://staythefuckapex-api.azurewebsites.net/api/3dmodels/new', requestOptions)
    console.log("send");
    return true;
  }


  return (
    <Form  onSubmit={handleSubmit} >
      <Form.Group controlId='imageUrlField'>
        <Form.Label className='h3 title'>Image URL</Form.Label>
        <Form.Control type='text' placeholder='https://image.url' />
      </Form.Group>

      <Form.Group controlId='titleField'>
        <Form.Label className='h3 title'>Title</Form.Label>
        <Form.Control type='text' placeholder='Title' />
      </Form.Group>

      <Form.Group controlId='descriptionField'>
        <Form.Label className='h3 title'>Description</Form.Label>
        <Form.Control type='text' placeholder='Description' />
      </Form.Group>

      <Form.Group controlId='dimensionsField'>
        <Form.Label className='h3 title'>Dimensions</Form.Label>
        <Form.Control type='text' placeholder='Dimensions' />
      </Form.Group>

      <Form.Group controlId='gcodeUrlField'>
        <Form.Label className='h3 title'>GCode URL</Form.Label>
        <Form.Control type='text' placeholder='https://gcode.url' />
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
