import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IThreeModel } from '../../models/IThreeModel';
import cubeAvatar from '../../assets/cube3d.png';
import { EntityCard } from '../EntityCard';

interface IProps {
  producer: IThreeModel;
  onClick: () => void;
  width: number;
  height: number;
}

export const ProducerCard: React.FC<IProps> = ({ producer, onClick, width, height }) => {
  return (
    <EntityCard width={width} height={height}>
      <Card.Img variant='top' src={cubeAvatar} />
      <Card.Body>
        <div>
          <b>{producer.title.toUpperCase()}</b>
        </div>
        <div>Description: {producer.description}</div>
        <div>Dimensions: {producer.dimensions}</div>
      </Card.Body>
      <Button onClick={onClick}>Click</Button>
    </EntityCard>
  );
};
