import React, { ReactNode } from 'react';
import './styles.css';

type Props = {
  children: ReactNode
};

export const PageLayout: React.FC<Props> = ({children}) => {

  return (
    <>
      <header>header</header>

      <main>
        {children}
      </main>

      <footer>footer</footer>
    </>
  );
};
