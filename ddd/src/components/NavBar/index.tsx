import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { XSquare, InboxesFill } from 'react-bootstrap-icons';

export const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' className='justify-content-between'>
      <Navbar.Brand href=''>
        <InboxesFill size={25} color='#FF8E53' style={{marginRight:'20px'}} />
        Stay the fuck Apex
      </Navbar.Brand>
      <Link to='/'>
        <XSquare size={30} color='#ff8e53' />
      </Link>
    </Navbar>
  );
};
