import React from 'react';
import { Container, ListGroup, Row, Col, Image } from 'react-bootstrap';
import { IThreeModel } from '../../models/IThreeModel';
import printer from '../../assets/printer3d.png';

interface IProps {
  producer: IThreeModel,
  onClick: () => void
}

export const ProducerCard: React.FC<IProps> = ({ producer, onClick}) => {

  return (
    <ListGroup.Item onClick={onClick}>
      <Row style={{ margin: '20px auto' }}>
        <Col xs={3} style={{ marginLeft: '20px' }}>
          <Image src={printer} width='100px' style={{ float: 'right' }} />
        </Col>
        <Col>
          <Container fluid style={{ minHeight: '100px', textAlign: 'left' }}>
            <div>
              <b>{producer.title}</b>
            </div>
            <div>Description : {producer.description}</div>
            <div>Dimensions : {producer.dimensions}</div>
          </Container>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}