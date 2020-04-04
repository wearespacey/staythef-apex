import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' className='justify-content-between'>
      <Navbar.Brand href="">
        <img
          alt=''
          src='/logo.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Stay the fuck Apex
      </Navbar.Brand>
      <Link to='/'>Back to Menu</Link>
    </Navbar>
  );
};
