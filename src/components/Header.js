import React from 'react';
import logo from '../assets/img/website-icon.svg';
export default function Header() {
  return (
    <header className="site-header fixed-top">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <a href="/">
                <img src={logo} style={{ height: '32px' }} alt="logo" />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
