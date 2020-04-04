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
            <Link to='/consumer'>
              <Button>Consumer</Button>
            </Link>
          </li>

          <li>
            <Link to='/producer'>
              <Button>Producer</Button>
            </Link>
          </li>
          
          <li>
            <Link to='/contributor'>
              <Button>Contributor</Button>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};
