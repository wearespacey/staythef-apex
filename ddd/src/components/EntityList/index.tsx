import React from 'react';
import { CardDeck } from 'react-bootstrap';

interface IProps {
  children: JSX.Element[];
}

export const EntityList: React.FC<IProps> = ({children}) => {
  return <CardDeck className='m-5'>{children}</CardDeck>;
};