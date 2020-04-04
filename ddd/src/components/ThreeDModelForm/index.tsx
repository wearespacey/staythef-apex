import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const ThreeDModelForm = () => {
  return (
    <Form>
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
    </Form>
  );
};
