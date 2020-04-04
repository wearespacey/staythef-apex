import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IThreeModel } from '../../models/IThreeModel';
import printerAvatar from '../../assets/printer3d.png';

interface IProps {
  producer: IThreeModel,
  onClick: () => void
}

export const ProducerCard: React.FC<IProps> = ({ producer, onClick}) => {

  return (
    <Card>
      <Card.Img variant='top' src={printerAvatar} />
      <Card.Body>
        <div>
          <b>{producer.title}</b>
        </div>
          <div>Description : {producer.description}</div>
          <div>Dimensions : {producer.dimensions}</div>
      </Card.Body>
      <Button onClick={onClick}>Click</Button>
    </Card>
  );
}