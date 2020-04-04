import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

export const Login = () => {
  return (
    <Container fluid>
      <span className='title'>Stay the fuck Apex</span>

      <div>
        <ul>
          <li>
            <Button>Consommateur</Button>
          </li>
          <li>
            <Button>Producteur</Button>
          </li>
          <li>
            <Link to='/contributor'>
              <Button>Contributeur</Button>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};
