import React, { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

interface IProps {
  children: ReactNode[];
  width: number;
  height: number;
}

export const EntityCard: React.FC<IProps> = ({ children, width, height }) => {
  return (
    <div style={{ width, height }}>
      <Card>{children}</Card>
    </div>
  );
};
