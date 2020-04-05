import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import { IThreeModel } from '../../models/IThreeModel';
import { ThreeDModelCard } from '../../components/ThreeDModelCard';

export const ThreeDModelCards = () => {
  const [models, setModels] = useState<IThreeModel[]>([]);

   async function api(){
      const res = await fetch('https://staythefuckapex-api.azurewebsites.net/api/3dmodels/all');
      const data: IThreeModel[] = await res.json();
      setModels(data);
    }
  
    useEffect(() => {
      api();
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
