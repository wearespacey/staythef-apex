import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

export const Login = () => {
  return (
    <Container fluid>
      <h2 className='title'>Stay the fuck Apex</h2>

      <div>
        <ul>
          <li>
            <Link to='/consumer'>
              <Button className='menuButton'>Consumer</Button>
            </Link>
          </li>

          <li>
            <Link to='/producer'>
              <Button className='menuButton'>Producer</Button>
            </Link>
          </li>

          <li>
            <Link to='/contributor'>
              <Button className='menuButton'>Contributor</Button>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};
