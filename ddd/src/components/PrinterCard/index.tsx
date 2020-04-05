import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IPrinterModel } from '../../models/IPrinterModel';
import printerAvatar from '../../assets/printer3d.png';
import { EntityCard } from '../EntityCard';

interface IProps {
  onClick: () => void;
  printer: IPrinterModel;
  width: number;
  height: number;
  contentButton: string;
}

export const PrinterCard: React.FC<IProps> = ({ printer, width, height, onClick, contentButton }) => {
  return (
    <EntityCard width={width} height={height}>
        <Card.Img variant='top' src={printerAvatar} />
        <Card.Body>
          <Card.Title>{printer.plastic.toUpperCase()}</Card.Title>
          <Card.Text>Print price: {printer.price}</Card.Text>
          <Card.Text>Producer code : {printer.producerId}</Card.Text>
        </Card.Body>
        <Button onClick={onClick}>{contentButton}</Button>
      </EntityCard>
  );
};
