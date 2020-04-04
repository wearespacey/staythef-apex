import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      className='justify-content-center'
      sticky='top'
    >
      <Navbar.Text>
        &copy; Copyright <a href="https://github.com/wearespacey" target="_blank">SpaceY</a> 2020.
      </Navbar.Text>
    </Navbar>
  );
};
