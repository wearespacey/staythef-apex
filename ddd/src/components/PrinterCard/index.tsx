import React from 'react';
import { Card } from 'react-bootstrap';
import { IPrinterModel } from '../../models/IPrinterModel';
import printerAvatar from '../../assets/printer3d.png';
import { EntityCard } from '../EntityCard';

interface IProps {
  printer: IPrinterModel;
  width: number;
  height: number;
}

export const PrinterCard: React.FC<IProps> = ({ printer, width, height }) => {
  return (
    <EntityCard width={width} height={height}>
        <Card.Img variant='top' src={printerAvatar} />
        <Card.Body>
          <Card.Title>{printer.id}</Card.Title>
          <Card.Text>{printer.details}</Card.Text>
        </Card.Body>
      </EntityCard>
  );
};
