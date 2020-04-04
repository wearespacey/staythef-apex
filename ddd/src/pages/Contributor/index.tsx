import React, { useState } from 'react';
import { CardDeck, Container, Accordion, Button } from 'react-bootstrap';
import { IThreeModel } from '../../models/IThreeModel';
import { ProducerCard } from '../../components/ProducerCard';
import { ThreeDModelAddForm } from '../../components/ThreeDModelAddForm';

let INITIAL_3DMODEL: IThreeModel = {
  id: '123',
  imageUrl:
    'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
  title: 'First model',
  description: 'Nice model bro',
  dimensions: '15x25x53 cm',
  gcodeUrl: '',
};

export const Contributor = () => {
  const [models, setModels] = useState<IThreeModel[]>([
    INITIAL_3DMODEL,
    INITIAL_3DMODEL,
    INITIAL_3DMODEL,
  ]);

  return (
    <div>
      <Accordion>
        <Accordion.Toggle as={Button} eventKey='0'>
          Toggle form
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Container>
            <ThreeDModelAddForm />
          </Container>
        </Accordion.Collapse>
      </Accordion>

      <CardDeck className='m-4'>
        {models.map((model, index) => (
          <ProducerCard
            width={300}
            height={500}
            key={index}
            producer={model}
            onClick={() => console.log('You clicked on an item!')}
          />
        ))}
      </CardDeck>
    </div>
  );
};
