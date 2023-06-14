import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Rout from '../routes/Rout';

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <Rout />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
