import React, { ReactNode } from 'react';
import './styles.css';
import { Navbar } from 'react-bootstrap';

type Props = {
  children?: ReactNode
};

export const PageLayout: React.FC<Props> = ({children}) => {

  return (
    <div className='site-container'>
      <header>
        <Navbar>header</Navbar>
      </header>

      <main>
        <div className="site-content">{children}</div>
      </main>

      <footer>footer</footer>
    </div>
  );
};
