import React, { ReactNode } from 'react';
import './styles.css';
import { Navbar } from 'react-bootstrap';

type Props = {
  children?: ReactNode
};

export const PageLayout: React.FC<Props> = ({children}) => {

  return (
    <>
      <header>
        <Navbar>
          header
        </Navbar>
      </header>

      <main>{children}</main>

      <footer>
        footer
      </footer>
    </>
  );
};
