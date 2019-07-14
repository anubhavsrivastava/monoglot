import React from 'react';
import config from '../../config';
import logo from '../assets/img/website-icon.svg';

export default function Footer() {
  return (
    <footer className="site-footer text-light">
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <a href="/">
              <img src={logo} style={{ height: '32px' }} alt="logo" />
            </a>
          </div>
          {/* <ul className="footer-links list-reset">
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">FAQ's</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul> */}
          <ul className="footer-social-links list-reset icons">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={name}>
                  <a href={url} className={`icon fa alt ${icon}`}>
                    {/* <span className="label">{name}</span> */}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Monoglot
          </div> */}
        </div>
      </div>
    </footer>
  );
}
