import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface IProps {
  children: JSX.Element[];
}

export const EntityList: React.FC<IProps> = ({children}) => {
  return (
    <ListGroup variant="flush">
      {children}
    </ListGroup>
  );
};