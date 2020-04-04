import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import { IThreeModel } from "../../models/IThreeModel";
import printer from "../../assets/printer3d.png";

interface IProps {
  models: IThreeModel[];
}

export const ListModels: React.FC<IProps> = ({ models }) => {
  return (
    <ListGroup variant="flush">
      {models.map((model) => (
        <ListGroup.Item>
          <Row style={{ margin: "20px auto" }}>
            <Col xs={3} style={{ marginLeft: "20px" }}>
              <Image src={printer} width="100px" style={{ float: "right" }} />
            </Col>
            <Col>
              <Container fluid style={{ minHeight: "100px", textAlign: "left" }}>
                <div>
                  <b>{model.title}</b>
                </div>
                <div>Description : {model.description}</div>
                <div>Dimensions : {model.dimensions}</div>
              </Container>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
