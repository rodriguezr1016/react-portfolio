// Layout.jsx
import React from 'react';
import Header from './component/Header';

const Layout = ({ children }) => {
 return (
    <div>
      <Header></Header>
      <main>
        {children}
      </main>
    </div>
 );
};

export default Layout;
