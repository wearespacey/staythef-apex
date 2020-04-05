import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import { IThreeModel } from '../../models/IThreeModel';
import { ThreeDModelCard } from '../../components/ThreeDModelCard';

const INITIAL_3DMODEL: IThreeModel = {
  id: '123',
  imageUrl:
    'https://cdn.icon-icons.com/icons2/510/PNG/512/printer_icon-icons.com_50058.png',
  title: 'First model',
  description: 'Nice model bro',
  dimensions: '15x25x53 cm',
  gcodeUrl: '',
};

export const ThreeDModelCards = () => {
  const [models, setModels] = useState<IThreeModel[]>([]);

   async function api(){
      const res = await fetch('https://staythefuckapex-api.azurewebsites.net/api/3dmodels/all');
      const data = await res.json();
      setModels(data as IThreeModel[]);
    }
  
    useEffect(() => {
      api();
      return () => {
      }
    }, []);


  return (
 
    <CardDeck className='m-4'>
      {models.map((model, index) => (
        <ThreeDModelCard
          width={300}
          height={485}
          key={index}
          producer={model}
          onClick={() => console.log('You clicked on an item!')}
          contentButton='Click !'
        />
      ))}
    </CardDeck>
  );
};
