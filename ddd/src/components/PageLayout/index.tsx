import React, { ReactNode } from 'react';
import './styles.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

interface IProps {
  children?: ReactNode;
}

export const PageLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='site-container'>
      <header>
        <NavBar />
      </header>

      <main>
        <div className='site-content'>{children}</div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
