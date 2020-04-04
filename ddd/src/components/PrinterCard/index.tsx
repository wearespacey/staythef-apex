import React from 'react';
import { Card } from 'react-bootstrap';
import { IPrinterModel } from '../../models/IPrinterModel';
import printerAvatar from '../../assets/printer3d.png';

interface IProps {
  printer: IPrinterModel;
}

export const PrinterCard: React.FC<IProps> = ({ printer }) => {
  return (
    <Card>
      <Card.Img variant='top' src={printerAvatar} />
      <Card.Body>
        <Card.Title>{printer.id}</Card.Title>
        <Card.Text>{printer.details}</Card.Text>
      </Card.Body>
    </Card>
  );
};
