import React, { ReactNode } from 'react';
import './styles.css';
import { NavBar } from '../NavBar';

type Props = {
  children?: ReactNode
};

export const PageLayout: React.FC<Props> = ({children}) => {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      <footer>
        footer
      </footer>
      </>
  );
};
