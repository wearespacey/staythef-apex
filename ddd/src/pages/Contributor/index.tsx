import React, { useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import { IThreeModel } from '../../models/IThreeModel';
import { ProducerCard } from '../../components/ProducerCard';

let initialValues: IThreeModel[] = [
  {
    id: '123',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1213',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
  {
    id: '1223',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
    title: 'First model',
    description: 'Nice model bro',
    dimensions: '15 cm x 25cm x 53 cm',
    gcodeUrl: '',
  },
];

export const Contributor = () => {
  const [models, setModels] = useState<IThreeModel[]>(initialValues);

  return (
    <CardDeck className='m-5'>
      {models.map((model, index) => (
        <ProducerCard
          width={200}
          height={425}
          key={index}
          producer={model}
          onClick={() => console.log('You clicked on an item!')}
          contentButton="Click !"
        />
      ))}
    </CardDeck>
  );
};
