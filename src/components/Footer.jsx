import React from 'react';
import Grid from './Grid';
import logo from '../assets/images/Logo-2.png';
import { Link } from 'react-router-dom';

const footerAboutLinks = [
  { 
    display: "Home",
    path: "/about"
  },
  { 
    display: "About",
    path: "/about"
  },
  { 
    display: "Contact",
    path: "/about"
  },
];

const footerCustomerLinks = [
  { 
    display: "Home",
    path: "/about"
  },
  { 
    display: "About",
    path: "/about"
  },
  { 
    display: "Contact",
    path: "/about"
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid 
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
          <div>
            <div className="footer__title">
              Footer Title
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => (
                  <div key={index}>
                    <Link to={item.path}>
                      <p>{item.display}</p>
                    </Link>
                  </div>
                ))
              }
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum molestias 
                recusandae reiciendis in dolor culpa? Repudiandae, nemo aspernatur quas, aperiam 
                dolorum numquam officiis maxime eveniet quos, ipsa quisquam accusamus?
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">
              Footer Title2
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} alt='' className="footer__logo" />
              </Link>
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Veniam voluptas eligendi temporibus alias necessitatibus aliquam expedita corrupti hic, inventore facilis quam dolores accusamus labore ex nemo vitae soluta consequatur corporis?
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer;