import React, { ReactNode } from 'react';
import './styles.css';
import { NavBar } from '../NavBar';

type Props = {
  children?: ReactNode
};

export const PageLayout: React.FC<Props> = ({children}) => {

  return (
    <div className='site-container'>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="site-content">{children}</div>
      </main>

      <footer>
        footer
      </footer>
      </>
  );
};
