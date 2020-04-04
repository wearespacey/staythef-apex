import React, { useState } from 'react';
import { EntityList } from '../../components/EntityList';
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
];

export const Contributor = () => {
  const [models, setModels] = useState<IThreeModel[]>(initialValues);
  const onClick = () => console.log('You clicked on an item!');

  const children = models.map((model, index) => (
    <ProducerCard key={index} producer={model} onClick={onClick} />
  ));

  return <EntityList>{children}</EntityList>;
};
